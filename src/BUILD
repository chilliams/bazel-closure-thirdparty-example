load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_binary",
    "closure_js_library",
)

closure_js_library(
    name = "lib",
    suppress = [
        "lintChecks",
        "moduleLoad",
        "reportUnknownTypes",
        "strictDependencies",
    ],
    srcs = glob(["*.js"]),
    deps = [
        "//externs",
        "@io_bazel_rules_closure//closure/library/string",
    ],
)

closure_js_binary(
    name = "index",
    entry_points = ["/src/main"],
    deps = [":lib"],
    visibility = [
        "//visibility:public",
    ],
)
