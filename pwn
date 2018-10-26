#!/bin/bash

set -x
#cp -r pwned you_have_been_pwned
git clone https://github.com/ajsantander/pwned.git you_have_been_pwned
cd you_have_been_pwned
npm i
node index $1
set +x
