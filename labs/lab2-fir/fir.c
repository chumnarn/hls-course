// fir.c — Lab 2: 8-tap FIR Filter with Pipelining
// Introduction to High-Level Synthesis
//
// Objective: Compare baseline vs PIPELINE II=1

#include "fir.h"

#define N_TAPS 8

// Low-pass filter coefficients (sum = 3200, normalized)
const int coeffs[N_TAPS] = {
    100, 250, 500, 700, 700, 500, 250, 100
};

void fir(int x, int* y) {
    static int shift_reg[N_TAPS] = {0};

#pragma HLS PIPELINE II=1
    // Shift register
    for (int i = N_TAPS - 1; i > 0; i--) {
#pragma HLS UNROLL
        shift_reg[i] = shift_reg[i-1];
    }
    shift_reg[0] = x;

    // MAC (multiply-accumulate)
    int acc = 0;
    for (int k = 0; k < N_TAPS; k++) {
#pragma HLS UNROLL
        acc += shift_reg[k] * coeffs[k];
    }
    *y = acc;
}

int main() {
    int x, y;

    // Test 1: Impulse response
    // x = [1, 0, 0, ...] → y = [h[0], h[1], ..., h[N-1], 0, 0, ...]
    x = 1024; fir(x, &y);
    // y[0] = 1024 * 100 = 102400
    if (y < 100000 || y > 105000) {
        printf("FAIL T1: y[0]=%d, expected ~102400\n", y);
        return 1;
    }

    for (int i = 0; i < N_TAPS; i++) {
        x = 0; fir(x, &y);
    }
    // After enough zeros, output should approach 0
    if (y != 0) {
        printf("FAIL T1b: residual y=%d\n", y);
        return 1;
    }

    // Test 2: Step response — DC gain = sum(coeffs) = 3200
    for (int i = 0; i < 30; i++) {
        x = 100; fir(x, &y);
    }
    // Should converge to 100 * 3200 = 320000
    if (y < 315000 || y > 325000) {
        printf("FAIL T2: step y=%d, expected ~320000\n", y);
        return 1;
    }

    printf("PASS\n");
    return 0;
}
