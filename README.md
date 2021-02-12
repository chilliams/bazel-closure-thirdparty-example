# Scratch project for JavaScript Bazel rules

This project demonstrates using Google Closure Compiler together with Webpack to
compile your own code with Closure's ADVANCED optimizations, but bundle
3rd-party code without running it through ADVANCED optimizations.

This process is extremely similar to how ClojureScript integrates with bundlers:
https://clojurescript.org/news/2020-04-24-bundle-target

## Running the code

- bazel run //:server
- Navigate to http://localhost:8080/
- Navigate to http://localhost:8080/samevendortag
- Navigate to http://localhost:8080/singlevendortag
