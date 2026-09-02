// matmul.c — Lab 3: 8x8 Matrix Multiplication
// Introduction to High-Level Synthesis
//
// Objective: ARRAY_PARTITION + UNROLL for memory parallelism

#include "matmul.h"

#define N 8

void matmul(int A[N][N], int B[N][N], int C[N][N]) {
#pragma HLS ARRAY_PARTITION variable=A complete dim=2
#pragma HLS ARRAY_PARTITION variable=B complete dim=1
#pragma HLS ARRAY_PARTITION variable=C complete dim=2

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            int sum = 0;
            for (int k = 0; k < N; k++) {
#pragma HLS PIPELINE II=1
#pragma HLS UNROLL factor=4
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
}

int main() {
    static int A[N][N], B[N][N], C[N][N];

    // Initialize A, B with deterministic values
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            A[i][j] = i + j + 1;
            B[i][j] = (i == j) ? 2 : 1;  // identity-like + 1
        }
    }

    matmul(A, B, C);

    // Reference computation in C
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            int ref = 0;
            for (int k = 0; k < N; k++) {
                ref += A[i][k] * B[k][j];
            }
            if (C[i][j] != ref) {
                printf("FAIL at [%d][%d]: got %d, expected %d\n", i, j, C[i][j], ref);
                return 1;
            }
        }
    }
    printf("PASS\n");
    return 0;
}
