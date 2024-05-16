#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate:gh-pages

# navigate into the build output directory
cd dist
cp ../CNAME .
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config user.name "Ferenc Sticza"
git config user.email "ferenc.sticza@gmail.com"
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:fsticza/fsticza.github.io.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f -u git@github.com:fsticza/sticza.com.git gh-pages

cd -
