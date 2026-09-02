#!/usr/bin/env bash
# run.sh — Lab 2: FIR Filter with Pipelining
set -euo pipefail
LAB_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$LAB_DIR"

echo "=========================================="
echo " Lab 2 — FIR Filter (Pipelining)"
echo "=========================================="

# A) Baseline (no PIPELINE)
echo ""
echo "=== A. Baseline (no directive) ==="
bambu --top-fname=fir --clock-period=10 --simulate fir.c 2>&1 | tail -10
echo "--- Resource report ---"
cat HLS_output/HLS_synthesis_report.txt | head -20

# B) With PIPELINE II=1
echo ""
echo "=== B. With PIPELINE II=1 + UNROLL ==="
rm -rf HLS_output
bambu --top-fname=fir --clock-period=10 --simulate fir.c 2>&1 | tail -10
echo "--- Resource report ---"
cat HLS_output/HLS_synthesis_report.txt | head -20

echo ""
echo "Compare latency/II/DSPs between A and B"
