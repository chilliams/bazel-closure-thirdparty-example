load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@npm2//webpack-cli:index.bzl", webpack_upgrade = "webpack_cli")

exports_files([
    "webpack.config.js",
    "vendor.webpack.config.js",
])

webpack(
    name = "vendor",
    args = [
        "--mode=production",
        "--config",
        "$(execpath //build_rules:vendor.webpack.config.js)",
        "--devtool=source-map",
        "--output-path=$(RULEDIR)/vendor",
    ],
    data = [
        "//build_rules:vendor.webpack.config.js",
        "@npm//:node_modules",
    ],
    output_dir = True,
    visibility = ["//visibility:public"],
)

webpack_upgrade(
    name = "vendor_upgrade",
    args = [
        "--mode=production",
        "--config",
        "$(execpath //build_rules:vendor.webpack.config.js)",
        "--devtool=source-map",
        "--output-path=$(RULEDIR)/vendor_upgrade",
    ],
    data = [
        "//build_rules:vendor.webpack.config.js",
        "@npm2//:node_modules",
    ],
    output_dir = True,
    visibility = ["//visibility:public"],
)
