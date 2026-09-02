// dataflow.cpp — Lab 4: Dataflow Streaming
// Introduction to High-Level Synthesis
//
// Objective: Task-level parallelism with DATAFLOW + hls::stream

#include "dataflow.h"

void stage1(hls::stream<int>& in, hls::stream<int>& out) {
#pragma HLS INLINE off
    int x = in.read();
    out.write(x + 1);
}

void stage2(hls::stream<int>& in, hls::stream<int>& out) {
#pragma HLS INLINE off
    int x = in.read();
    out.write(x * 2);
}

void stage3(hls::stream<int>& in, hls::stream<int>& out) {
#pragma HLS INLINE off
    int x = in.read();
    out.write(x - 5);
}

void pipeline(hls::stream<int>& in, hls::stream<int>& out) {
#pragma HLS DATAFLOW
    hls::stream<int> mid1, mid2;
#pragma HLS STREAM variable=mid1 depth=4
#pragma HLS STREAM variable=mid2 depth=4

    stage1(in, mid1);
    stage2(mid1, mid2);
    stage3(mid2, out);
}

int main() {
    hls::stream<int> in, out;
    const int N = 10;

    // Drive 10 samples
    for (int i = 0; i < N; i++) {
        in.write(i);
    }

    // Run pipeline
    pipeline(in, out);

    // Verify: out[i] = (i+1)*2 - 5
    for (int i = 0; i < N; i++) {
        int got = out.read();
        int expected = (i + 1) * 2 - 5;
        if (got != expected) {
            printf("FAIL at i=%d: got %d, expected %d\n", i, got, expected);
            return 1;
        }
    }
    printf("PASS\n");
    return 0;
}
