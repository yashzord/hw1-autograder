#!/usr/bin/sh

# Zip the autograder excluding unnecessary files
ZIP=hw1-autograder.zip

rm -f $ZIP

zip -r $ZIP . -x @.zipignore
