#!/bin/bash

set -eo pipefail

yarn build
mkdir -p dist/imgs
cp src/imgs/cover.png dist/imgs/cover.png
