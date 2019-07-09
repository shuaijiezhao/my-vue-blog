#!/bin/env bash

npm run build
cd dist
git init 
git add .
git commit -am 'init'
git remote add origin https://github.com/shuaijiezhao/my-vue-blog.git
git push -f origin master