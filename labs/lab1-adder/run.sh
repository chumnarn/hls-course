#!/usr/bin/env bash
# run.sh — Lab 1: Simple Adder
set -euo pipefail
LAB_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$LAB_DIR"

echo "=========================================="
echo " Lab 1 — Simple Adder (Bambu HLS)"
echo "=========================================="

# 1) HLS synthesis + co-simulation
echo ""
echo "[1/3] Bambu HLS (with co-simulation)..."
bambu \
    --top-fname=adder \
    -O2 \
    --clock-period=10 \
    --simulate \
    --simulator=VERILATOR \
    --print-dot \
    adder.c

# 2) Show generated files
echo ""
echo "[2/3] Generated Verilog files:"
ls -la HLS_output/verilog/ 2>/dev/null || true

# 3) Show resource report
echo ""
echo "[3/3] Resource report:"
echo "----------------------"
cat HLS_output/HLS_synthesis_report.txt 2>/dev/null || echo "(report not found)"

echo ""
echo "Done. Inspect HLS_output/verilog/adder.v"
