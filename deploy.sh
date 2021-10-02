#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# github page is setup to serve content in folder: docs
# and hosted at path: https://applied-math-coding.github.io/histogram-distance/
# that is, the public path for vue is: /histogram-distance/
rm -rf docs
mkdir docs
cp -r dist/* docs

