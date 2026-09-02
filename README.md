# Introduction to High-Level Synthesis — Training Course

> **ระดับ:** Beginner → Intermediate
> **ระยะเวลา:** 3 วัน (ทฤษฎี 1 วัน + ปฏิบัติ 2 วัน)
> **เครื่องมือ:** Bambu HLS + Yosys + OpenROAD + Icarus + COCOTB
> **PDK:** IHP SG13G2 (130 nm SiGe BiCMOS) และ SKY130

---

## โครงสร้างหลักสูตร

| ส่วน | ไฟล์ | เนื้อหา |
|------|------|--------|
| **Part I — ทฤษฎี** | `hls-course-part1-theory.md` | บทที่ 1–6: แนวคิด HLS, Flow, Scheduling/Binding, Coding Style, Directives, Interfaces |
| **Part II — ปฏิบัติ** | `hls-course-part2-practice.md` | บทที่ 7–14: ติดตั้ง Bambu, Labs 1–4, Verification, OpenROAD integration, Best Practices |
| **Labs** | `labs/` | โค้ดตัวอย่างพร้อมรัน |

## Labs

| Lab | โฟลเดอร์ | หัวข้อ | Directives ที่ใช้ |
|-----|----------|--------|-----------------|
| 1 | `labs/lab1-adder/` | Simple Adder (Hello World) | — |
| 2 | `labs/lab2-fir/` | 8-tap FIR Filter | `PIPELINE II=1` + `UNROLL` |
| 3 | `labs/lab3-matmul/` | 8×8 Matrix Multiplication | `ARRAY_PARTITION` + `UNROLL` + `PIPELINE` |
| 4 | `labs/lab4-dataflow/` | Streaming Pipeline | `DATAFLOW` + `hls::stream` |

## Quick Start

```bash
# 1. ติดตั้ง Bambu (ดูรายละเอียดใน Part II)
sudo apt-get install -y build-essential autoconf libtool libboost-all-dev libtcl-dev tk-dev
git clone https://github.com/ferrandi/PandA-bambu.git
cd PandA-bambu && make -j$(nproc)

# 2. รัน Lab 1
cd hls-course/labs/lab1-adder
chmod +x run.sh
./run.sh
```

## Learning Path

```
Day 1: ทฤษฎี
  ├── Morning: บทที่ 1–3 (แนวคิด, Flow, Internal ops)
  ├── Afternoon: บทที่ 4–6 (Coding Style, Directives, Interfaces)
  └── Setup: ติดตั้ง Bambu + Yosys + OpenROAD

Day 2: ปฏิบัติ
  ├── Morning: Lab 1 (Adder), Lab 2 (FIR)
  ├── Afternoon: Lab 3 (MatMul)
  └── Homework: เปลี่ยน optimization, observe resource

Day 3: ปฏิบัติ (ขั้นสูง)
  ├── Morning: Lab 4 (Dataflow), Verification (COCOTB)
  ├── Afternoon: OpenROAD integration
  └── Final Project: Sobel Edge Detector
```

## เนื้อหาในแต่ละไฟล์

### hls-course-part1-theory.md
- บทที่ 1: HLS คืออะไร, ประวัติ, เครื่องมือ
- บทที่ 2: Compilation Flow (Frontend → Transform → Schedule → Bind → RTL)
- บทที่ 3: CDFG, Scheduling algorithms, Resource allocation
- บทที่ 4: Arbitrary precision types, Coding style
- บทที่ 5: PIPELINE, UNROLL, ARRAY_PARTITION, DATAFLOW
- บทที่ 6: Block-level interface, AXI, Stream, BRAM

### hls-course-part2-practice.md
- บทที่ 7: ติดตั้ง Bambu, โครงสร้าง output
- บทที่ 8: Lab 1 - Simple Adder
- บทที่ 9: Lab 2 - FIR Filter
- บทที่ 10: Lab 3 - Matrix Multiplication
- บทที่ 11: Lab 4 - Dataflow Streaming
- บทที่ 12: Verification ด้วย Icarus + COCOTB
- บทที่ 13: OpenROAD integration
- บทที่ 14: Best practices + Cheat-sheet

## Prerequisites สำหรับนักศึกษา

- พื้นฐาน Verilog/SystemVerilog
- เคยใช้ Icarus Verilog หรือ Vivado
- พื้นฐาน C/C++ (pointers, arrays, structs)
- Linux command line

## เอกสารอ้างอิง

1. Bambu HLS: https://panda.dei.polimi.it/?page_id=31
2. Xilinx UG902 (Vitis HLS): https://docs.xilinx.com
3. "High-Level Synthesis: From Algorithm to Digital Circuit" — Coussy et al.
4. OpenROAD: https://openroad.readthedocs.io
5. IHP-Open-PDK: https://github.com/IHP-GmbH/IHP-Open-PDK

## License

เอกสารนี้ใช้สำหรับการศึกษา — ใช้และแชร์ได้อย่างอิสระ
