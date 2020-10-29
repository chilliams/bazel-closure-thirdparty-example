load("@npm//http-server:index.bzl", "http_server")
load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")

exports_files(["webpack.config.js"])

webpack(
    name = "bundle",
    outs = ["app.bundle.js"],
    args = [
        "--verbose",
        "--mode=none",
        "--config",
        "webpack.config.js",
        "--devtool=source-map",
        "$(execpath //src:index.js)",
        "-o",
        "$@",
    ],
    data = [
        "//:webpack.config.js",
        "//src:index.js",
        "@npm//:node_modules",
    ],
)

http_server(
    name = "server",
    data = [
        "app.bundle.js",
        "index.html",
    ],
    templated_args = ["."],
)
