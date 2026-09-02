#!/usr/bin/env bash
echo "PATH=$PATH" | tr ':' '\n' | grep -i node
ls -la "/mnt/c/Program Files/nodejs/" | head -10
ls -la "/mnt/c/Program Files/nodejs/node.exe" 2>&1
echo "---"
"/mnt/c/Program Files/nodejs/node.exe" --version 2>&1
