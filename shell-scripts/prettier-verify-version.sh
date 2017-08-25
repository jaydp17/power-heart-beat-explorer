#!/usr/bin/env bash

## This script makes sure everyone has the same version of prettier
## It is run in pre-commit hook

prettierVersion='1.5.3'
if [[ `./node_modules/.bin/prettier --version` != ${prettierVersion} ]]; then
  echo "You need prettier v${prettierVersion}"
  echo "run npm install to fix this"
  exit 1;
fi
