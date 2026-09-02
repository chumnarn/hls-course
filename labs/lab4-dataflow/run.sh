#!/usr/bin/env bash
# run.sh — Lab 4: Dataflow Streaming
set -euo pipefail
LAB_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$LAB_DIR"

echo "=========================================="
echo " Lab 4 — Dataflow Streaming Pipeline"
echo "=========================================="

bambu \
    --top-fname=pipeline \
    -O2 \
    --clock-period=10 \
    --simulate \
    --simulator=VERILATOR \
    --print-dot \
    dataflow.cpp 2>&1 | tail -10

echo ""
echo "--- Resource report ---"
cat HLS_output/HLS_synthesis_report.txt | head -30

echo ""
echo "Generated Verilog structure:"
ls HLS_output/verilog/ | head -20
