#!/usr/bin/env bash
# Make node available
mkdir -p /tmp/mybins
ln -sf "/mnt/c/Program Files/nodejs/node.exe" /tmp/mybins/node
ln -sf "/mnt/c/Program Files/nodejs/npm.cmd" /tmp/mybins/npm
export PATH="/tmp/mybins:$PATH"

cd /mnt/c/Users/000148/.minimax/workspace/hls-course

# Try global first
PW_PATH=$(npm root -g 2>/dev/null)/playwright
if [ ! -d "$PW_PATH" ]; then
    echo "Installing playwright locally..."
    npm init -y >/dev/null 2>&1
    npm install playwright 2>&1 | tail -5
fi

echo "---"
node --version
echo "---"
node html2pdf.js \
    hls-course-part1-theory.html hls-course-part1-theory.pdf \
    hls-course-part2-practice.html hls-course-part2-practice.pdf \
    README.html README.pdf
