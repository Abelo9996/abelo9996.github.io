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
output = subprocess.check_output(['cd ~/project;python3 run_cron.py'], stderr=subprocess.STDOUT, shell=True)
output = output.decode("utf-8").split('\n')[:-1]
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
        files_arr.append(output[i+1])
        exec(open("python/"+benchmark_type+"/"+python_file_name+".py").read(),globals(),locals())
    else:
        print("Output syntax is incorrect!")
        break
############################

with open('files.txt', 'w') as f:
    f.write(",".join(files_arr))