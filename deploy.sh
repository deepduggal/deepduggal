#!/usr/bin/env bash
# Postbuild - Runs after npm run build. 

oldBuildDir="docs/"
newBuildDir="build/"

## Add existing things to build
# Copy CNAME file to build directory
cp ${oldBuildDir}CNAME ${newBuildDir}

## Replace old build with new build
# Delete old build directory
rm -rf ${oldBuildDir}
# Rename build directory to docs (for github pages)
mv ${newBuildDir} ${oldBuildDir}

# Deployment (Github Pages)
# Commit the build and push to github
git add ${oldBuildDir}
git commit -m "rebuilt"
git push origin master