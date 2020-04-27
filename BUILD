load("@npm//http-server:index.bzl", "http_server")
load("@npm//webpack-cli:index.bzl", webpack = "webpack_cli")

webpack(
    name = "bundle",
    outs = ["app.bundle.js"],
    args = [
        "$(execpath //src:index.js)",
        "-o",
        "$@",
    ],
    data = [
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
