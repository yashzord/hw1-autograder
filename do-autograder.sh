#!/usr/bin/sh

# Autograder execution script
SRC=`pwd`/source

cd submission

SRC=$SRC PRJ_DIR='hw1-sol' PRJ_NAME='Homework 1' \
    node $SRC/project/dist/index.js $SRC/project/dist/grading/*.js
