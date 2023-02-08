import os
from base64 import decodebytes
import re
import json
import time
import subprocess
import numpy as np
import glob

data = ""
### Uncomment the following calls if tmp folder is not present or needs an updated repo to be pulled. ###
# os.system('timeout 60s rm -rf tmp\n')
# cmd1 = 'module load libfabric cray-pmi;mkdir tmp;cd tmp;git clone https://bitbucket.org/berkeleylab/upcxx.git;cd upcxx;./configure --with-cc=cc --with-gasnet=https://bitbucket.org/berkeleylab/gasnet/get/develop.tar.gz --with-cxx=mpicxx --with-mpi-cc=cc --with-ofi-provider=cxi --prefix=.;make -j8 all;make install;gmake all;gmake install;'
# cmd2 = 'UPCXX_CODEMODE=opt;export UPCXX_CODEMODE;UPCXX_THREADMODE=seq;export UPCXX_THREADMODE;UPCXX_NETWORK=ofi;export UPCXX_NETWORK;'
# cmd3 = "printf '#!/bin/bash\ngmake check;' > gmake_check; chmod +x gmake_check;"
# cmd4 = 'export PATH="~/project/tmp/upcxx/bin/:$PATH";salloc -C cpu -q interactive -t 10:00 --account=m2878 ./gmake_check > output.txt; cat output.txt; rm output.txt;rm gmake_check;'
# data = subprocess.check_output([cmd1+cmd2+cmd3+cmd4], stderr=subprocess.STDOUT, shell=True)
##########################

### Start running benchmark tests ###
if b'FAILED' in data:
    print("Failed to install UPC++")
else:
    cmd1 = "printf '#!/bin/bash\nupcxx --version' > upcxx_version_check; chmod +x upcxx_version_check;"
    cmd2 = 'export PATH="~/project/tmp/upcxx/bin/:$PATH";./upcxx_version_check > output.txt; cat output.txt; rm output.txt;rm upcxx_version_check;'
    data = subprocess.check_output([cmd1+cmd2], stderr=subprocess.STDOUT, shell=True)
    p = re.compile('(upcxx-[^\s]+)')
    upcxx_version = "".join(p.findall(data.decode('utf-8')))
    if upcxx_version:
        print(upcxx_version)
        json_filenames = []
        for folders in glob.glob("json/*"):
            for file_name in glob.glob(folders+"/*"):
                if (file_name.split("/"))[-1] != "example.json":
                    json_filenames.append(file_name)
        for json_file in json_filenames:
            print(json_file)
            f = open (json_file, "r")
            json_file = json.loads(f.read())
            cmd1 = "cd ~/project/tmp/upcxx/bench;{pre_command};UPCXX_CODEMODE={codemode};export UPCXX_CODEMODE;UPCXX_THREADMODE={threadmode};export UPCXX_THREADMODE;UPCXX_NETWORK={network};export UPCXX_NETWORK;".format(codemode=json_file["codemode"],threadmode=json_file["threadmode"],network=json_file["network"],pre_command=json_file["pre_command"])
            cmd2 = "printf '#!/bin/bash\nupcxx -c {file}.cpp; upcxx -o {file}  {file}.o -lm;\nupcxx-run {flags} -n {n_proc} {file}' > {file}1; chmod +x {file}1;".format(n_proc=json_file["n_proc"],flags=json_file["flags"],file=json_file["file"])
            cmd3 = 'export PATH="~/project/tmp/upcxx/bin/:$PATH";salloc -C {architecture} -q interactive -t {timeout}:00 --account=m2878 ./{file}1;{post_command};'.format(timeout=str(int(int(json_file["timeout"])/60)),file=json_file["file"],architecture=json_file["architecture"],post_command=json_file["post_command"])
            data = subprocess.check_output([cmd1+cmd2+cmd3], stderr=subprocess.STDOUT, shell=True)
            print('{csv_name}'.format(csv_name=json_file["csv_name"]))
            p = re.compile(json_file["regex"])
            print(eval(json_file["outputs"]))
            f.close()
    else:
        print("No UPC++ Version Specified")
##########################

### Uncomment the following call if tmp folder is no longer needed / needs an update. ###
# os.system('cd ~/project;timeout 60s rm -rf tmp\n')
##########################