load("@npm//http-server:index.bzl", "http_server")

http_server(
    name = "server",
    data = [
        "index.html",
        "multipleversions.html",
        "samevendortag.html",
        "singlevendortag.html",
        "//src/app1",
        "//src/app2",
        "//src/app3",
    ],
    templated_args = ["."],
)
