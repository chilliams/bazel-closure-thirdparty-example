load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "externs",
    srcs = glob(["*.js"]),
    suppress = ["reportUnknownTypes"],
    visibility = ["//visibility:public"],
)
