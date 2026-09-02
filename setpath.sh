#!/usr/bin/env bash
# Test setting PATH
export PATH="/c/Program Files/nodejs:$PATH"
node --version
which node
echo "PATH=$PATH"
