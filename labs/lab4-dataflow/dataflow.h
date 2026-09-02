// dataflow.h — Lab 4
#ifndef DATAFLOW_H
#define DATAFLOW_H

#include <hls_stream.h>
#include <stdio.h>

void pipeline(hls::stream<int>& in, hls::stream<int>& out);

#endif
