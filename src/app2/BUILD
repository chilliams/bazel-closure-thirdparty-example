load("//build_rules:defs.bzl", "custom_js_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "lib",
    srcs = glob(["*.js"]),
    suppress = [
        "moduleLoad",
        "reportUnknownTypes",
    ],
    deps = [
        "//externs",
    ],
)

custom_js_binary(
    name = "app2",
    entry_points = ["/src/app2/main"],
    visibility = [
        "//visibility:public",
    ],
    deps = [":lib"],
)
