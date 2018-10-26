#!/bin/bash

set -x
mkdir you_have_been_pwned
cd  you_have_been_pwned
npm init --yes
npm install ipwnedyou
chmod a+x ./node_modules/ipwnedyou/index.js
node ./node_modules/ipwnedyou/index.js
set +x
