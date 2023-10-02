#!/bin/bash
# title: build
# date created: "2023-10-02"

output_folder="${1%.*}"
marp --theme theme.css "$1" --engine engine.js --bespoke.progress --html -o "index.html"
cp -r ./ ../docs/$output_folder/
exit 0
