#!/usr/bin/env bash
# Make node available in PATH
mkdir -p /tmp/mybins
ln -sf "/mnt/c/Program Files/nodejs/node.exe" /tmp/mybins/node
ln -sf "/mnt/c/Program Files/nodejs/npm.cmd" /tmp/mybins/npm
export PATH="/tmp/mybins:$PATH"
exec "$@"
