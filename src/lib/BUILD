load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "lib",
    srcs = glob(["*.js"]),
    suppress = [
        "lintChecks",
        "moduleLoad",
        "reportUnknownTypes",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "//externs",
    ],
)
