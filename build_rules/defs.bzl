load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")
load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")

def custom_js_binary(name, deps = [], **kwargs):
    closure_js_binary(name = name + "_prebundle", deps = deps, **kwargs)

    webpack(
        name = name,
        output_dir = True,
        args = [
            "--mode=production",
            "--config",
            "$(execpath //:webpack.config.js)",
            "--devtool=source-map",
            "--entry",
            "./$(execpath " + name + "_prebundle.js)",
            "--name=" + name + ".js",
            "--output-path=$(RULEDIR)/" + name,
        ],
        data = [
            name + "_prebundle.js",
            name + "_prebundle.js.map",
            "@npm//:node_modules",
            "//:webpack.config.js",
        ],
        visibility = kwargs.get("visibility"),
    )
