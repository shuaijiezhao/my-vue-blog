#!/bin/env bash

rm -rf dist
npm run build
cd dist
git init 
git add .
git commit -am 'init'
git remote add origin https://github.com/shuaijiezhao/blog-client-preview.git
git push -f origin master