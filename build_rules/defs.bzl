load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")
load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@npm2//webpack-cli:index.bzl", webpack_upgrade = "webpack_cli")

def custom_js_binary(name, deps = [], upgrade = False, **kwargs):
    closure_js_binary(name = name + "_prebundle", deps = deps, **kwargs)

    wp = webpack
    node_modules = "@npm//:node_modules"
    vendor = "//build_rules:vendor"
    if upgrade:
        wp = webpack_upgrade
        node_modules = "@npm2//:node_modules"
        vendor = "//build_rules:vendor_upgrade"

    wp(
        name = name + "_wp",
        outs = [
            name + ".js",
            name + ".js.map",
        ],
        args = [
            "--mode=production",
            "--config",
            "$(execpath //build_rules:webpack.config.js)",
            "--devtool=source-map",
            "--entry",
            "./$(execpath " + name + "_prebundle.js)",
            "--name=" + name + ".js",
            "--output-path=$(RULEDIR)",
            "--env",
            "vendor=" + "$(execpath " + vendor + ")",
        ],
        data = [
            name + "_prebundle.js",
            name + "_prebundle.js.map",
            node_modules,
            "//build_rules:webpack.config.js",
            vendor,
        ],
    )

    native.genrule(
        name = name + "_vendor",
        srcs = ["//build_rules:vendor"],
        outs = [
            "vendor.js",
            "vendor.js.map",
        ],
        cmd = "cp $(SRCS)/* $(RULEDIR)",
    )

    native.filegroup(
        name = name,
        srcs = [
            ":" + name + "_wp",
            ":" + name + "_vendor",
        ],
        visibility = kwargs.get("visibility"),
    )
