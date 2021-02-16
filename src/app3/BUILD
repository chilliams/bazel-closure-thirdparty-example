load("//build_rules:defs.bzl", "custom_js_binary")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

closure_js_library(
    name = "lib",
    srcs = glob(["*.js"]),
    suppress = [
        "moduleLoad",
        "reportUnknownTypes",
        "strictDependencies",
    ],
    deps = [
        "//externs",
        "//src/lib",
    ],
)

custom_js_binary(
    name = "app3",
    entry_points = ["/src/app3/main"],
    upgrade = True,
    visibility = [
        "//visibility:public",
    ],
    deps = [":lib"],
)
