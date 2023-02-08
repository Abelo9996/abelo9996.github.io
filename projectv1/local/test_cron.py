from base64 import decodebytes
import paramiko
import pyotp
import re
import json
import time
import os
from os.path import exists
import csv
import pandas as pd
from datetime import datetime
import numpy as np
import subprocess
from bokeh.plotting import figure, output_file, save, show
from bokeh.models.annotations import Title
from bokeh.palettes import Dark2_5 as palette
import itertools

### Launch shell to run benchmark code ###
output = ['upcxx-2022.9.0-0-g27b0fedf', 'json/basic/rpc_perf_bw.json', 'multi-bandwidth_rpc_perf_UPCXX(cpu_opt_seq_ofi)_sharedheap=20_2processors_one-at-a-time_8bytes', '1675839514.9383938,41829.5,44576.0,45381.2,55716.3', 'json/basic/misc_perf.json', 'misc_perf_UPCXX(cpu_opt_seq_ofi)_sharedheap=20_2processors_one-at-a-time_8bytes', '1675839531.2229261,0.001004', 'json/basic/put_flood.json', 'put_flood_UPCXX(cpu_opt_seq_ofi)_2processors_size=4194304_bw', '1675839612.5127223,4.19298e+10', 'json/basic/rpc_perf.json', 'rpc_perf_UPCXX(cpu_opt_seq_ofi)_sharedheap=20_2processors_one-at-a-time_8bytes', '1675839669.813121,0.00311442', 'json/basic/rpc_perf_latency.json', 'multi-latency_rpc_perf_UPCXX(cpu_opt_seq_ofi)_sharedheap=20_2processors_one-at-a-time_8bytes', '1675839731.1422358,3.02549,3.78179']
############################

print(output)

upcxx_version = output[0]

### Process outputs and save to CSV/PNG files ###
files_arr = []
for i in range(1,len(output),3):
    if len(output[i]) > 0 and output[i] != "FAIL" and "Error" not in output[i]:
        benchmark_type = (output[i].split("/"))[1]
        python_file_name = (((output[i].split("/"))[-1]).split("."))[0]
        files_arr.append(python_file_name)
        files_arr.append(benchmark_type)
        exec(open("python/"+benchmark_type+"/"+python_file_name+".py").read(),globals(),locals())
    else:
        print("Output syntax is incorrect!")
        break
############################

with open('files.txt', 'w') as f:
    f.write(",".join(files_arr))