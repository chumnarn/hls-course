#!/usr/bin/env bash
export PATH="/tmp/mybins:$PATH"
npm list -g pptxgenjs 2>&1 || echo "NOT INSTALLED"
npm root -g
