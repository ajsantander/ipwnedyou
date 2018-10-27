#!/bin/bash

set -x
rm -rf you_have_been_pwned
git clone https://github.com/ajsantander/pwned.git you_have_been_pwned
cd you_have_been_pwned
npm i
node index "$@"
set +x
