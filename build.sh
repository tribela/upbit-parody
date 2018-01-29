#!/bin/bash

set -eo pipefail

git checkout site
git reset --hard master
yarn build
mkdir -p dist/imgs
cp src/imgs/cover.png dist/imgs/cover.png
git add -f dist
git commit -m 'Build'
git checkout master
