#!/bin/zsh

# abort on errors
#set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config --local user.name "S. Otha Scarlet"
git config --local user.email "sohtascarlet@gmail.com"
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_rsa_pro -F /dev/null' git push -f git@github.com:haha/BeatenGames.git main

#cd -
