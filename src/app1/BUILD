load("//build_rules:defs.bzl", "custom_js_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "lib",
    srcs = glob(["*.js"]),
    suppress = [
        "lintChecks",
        "moduleLoad",
        "reportUnknownTypes",
        "strictDependencies",
    ],
    deps = [
        "//externs",
        "//src/lib",
        "@io_bazel_rules_closure//closure/library/string",
    ],
)

custom_js_binary(
    name = "app1",
    entry_points = ["/src/app1/main"],
    visibility = [
        "//visibility:public",
    ],
    deps = [":lib"],
)
