#!/usr/bin/env bash

. shell-scripts/prettier-verify-version.sh

find . -name "*.js" -o -name "*.scss" | grep -vFf .gitignore | xargs yarn prettier
