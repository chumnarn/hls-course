// adder.c — Lab 1: Simple Adder
// Introduction to High-Level Synthesis — Bambu HLS
//
// Compile with Bambu:
//   bambu --top-fname=adder --clock-period=10 --simulate adder.c
//
// Objective: Convert a simple C function into Verilog via HLS
// and inspect the generated RTL structure.

#include "adder.h"

void adder(int a, int b, int* c) {
    *c = a + b;
}

int main() {
    int a, b, c;

    // Test 1: positive
    a = 5;  b = 7;   adder(a, b, &c);
    if (c != 12) { printf("FAIL T1: %d + %d = %d\n", a, b, c); return 1; }

    // Test 2: negative + positive
    a = -100; b = 200; adder(a, b, &c);
    if (c != 100) { printf("FAIL T2: %d + %d = %d\n", a, b, c); return 1; }

    // Test 3: zero
    a = 0; b = 0;   adder(a, b, &c);
    if (c != 0)   { printf("FAIL T3: %d + %d = %d\n", a, b, c); return 1; }

    // Test 4: overflow (signed wrap)
    a = 2147483647; b = 1; adder(a, b, &c);
    if (c != -2147483648) { printf("FAIL T4: overflow = %d\n", c); return 1; }

    printf("PASS\n");
    return 0;
}
