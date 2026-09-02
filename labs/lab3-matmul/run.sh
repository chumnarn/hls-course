#!/usr/bin/env bash
# run.sh — Lab 3: Matrix Multiplication
set -euo pipefail
LAB_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$LAB_DIR"

echo "=========================================="
echo " Lab 3 — Matrix Multiplication"
echo "=========================================="

# A) No optimization
echo ""
echo "=== A. Baseline (no directive) ==="
bambu --top-fname=matmul --clock-period=10 --simulate matmul.c 2>&1 | tail -8
echo "--- Resource report ---"
grep -E "LUT|FF|DSP|BRAM|Latency|Interval" HLS_output/HLS_synthesis_report.txt | head -10

# B) Full optimization
echo ""
echo "=== B. With ARRAY_PARTITION + UNROLL + PIPELINE ==="
rm -rf HLS_output
bambu --top-fname=matmul --clock-period=10 --simulate matmul.c 2>&1 | tail -8
echo "--- Resource report ---"
grep -E "LUT|FF|DSP|BRAM|Latency|Interval" HLS_output/HLS_synthesis_report.txt | head -10

echo ""
echo "Observe: array partition increases registers but reduces latency"
