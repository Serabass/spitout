# spitout

A small CLI tool that prints contents of passed file and then removes it.

# Why?
Just for fun and a useful cases:
  1. When any compiler does not writing a code to Stdout we can write it to file, pipe to executable with | or && (e.g. node) and remove an output file:
    > tsc script.ts && spit script.js | node
