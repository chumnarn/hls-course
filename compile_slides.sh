#!/usr/bin/env bash
mkdir -p /tmp/mybins
ln -sf "/mnt/c/Program Files/nodejs/node.exe" /tmp/mybins/node
export PATH="/tmp/mybins:$PATH"

cd /mnt/c/Users/000148/.minimax/workspace/hls-course
node compile_slides.js
