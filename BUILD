load("@npm//http-server:index.bzl", "http_server")

exports_files(["webpack.config.js"])

http_server(
    name = "server",
    data = [
        "index.html",
        "samevendortag.html",
        "singlevendortag.html",
        "//src/app1",
        "//src/app2",
    ],
    templated_args = ["."],
)
