
# UPC++ Performance Monitor

The UPC++ performance monitor leverages crons to perform tests on UPC++ benchmark code from any machine locally.

**Update (1/13):**
- Removed SSH capabilities
- `local` directory will now need to be placed in Perlmutter server to function properly (in addition to the other contents). 
- Adjusted the design of `local` directory to use Python files instead of JSON for benchmark ouput processing and plot creation.

## How It Works/Setup


1. The repository contains a server-side and local-side code, where the `local` directory contains the code for running entry calls to the server using a cron job (and viewing time-series plots on a locally-hosted webpage). The remaining files should be placed in a server to run these automated tests.
2. Please note that you would need to set up a cron job on your local machine to run the `cron.py` file in the `local` directory at every specified interval of time. My best suggestion for crons in Perlmutter would be the `scrontab` command, however it certainly depends on your machine and setup.
3. For the local-side code:
	- `data` is a directory that stores all of the benchmark output values into CSV files under 3 specific categories of tests: `basic`,`openmp`, and `cuda`
	- `images` is a directory that contains all of the images of the time-series plots under 3 specific categories of tests: `basic`,`openmp`, and `cuda`
	- `python` is a directory that contains the customized Python code for processing and plotting the output of the benchmark tests from the server-side code. Refer to `example.py` for a summary of what the files accomplish.
	- `cron.py` is the entry-point python file for the cron that sets up a connection to Perlmutter, calls `run_cron.py` in the server, and then processes the output into its designated directories. Please note that to be able to run the file, you will need to add your username and password to the file (along with the Google Authenticator Secret Key to get TOTP).
	-  `web_viewer.py` is a brief python code that launches a locally-hosted webpage to view all of the images in the `images` directory. To run the file, you may just run `python3 web_viewer.py`.
	- To be able to run all of the previously mentioned files, please install the requirements mentioned in `requirements.txt` by running `pip install -r requirements.txt`.
4. For the server-side code:
	-  `json` is a directory that contains the JSON configurations for setting up the commands to run the benchmark tests from the UPC++ repo. It contains 3 specific categories of files: `basic`,`openmp`, and `cuda`The keys in the files are:
		- `file` stores the file name of the desired benchmark file without the extension (i.e. `file` stores `misc_perf` to run `misc_perf.c`).
		- `pre_command` contains any additional commands that would be needed before running the `upcxx-run` commands. Default value is `cd .` (which does nothing)
		- `post_command` contains any additional commands that would be needed after running the `upcxx-run` commands. Default value is `cd .` (which does nothing)
		- `architecture` stores the architecture used
		- `n_proc` stores the number of processors used 
		- `codemode` stores the code mode for UPC++
		- `threadmode` stores the thread mode for UPC++
		- `network` stores the network used to run benchmark
		- `flags` stores any additional flags that would be used in the `upcxx-run` commands. Default value is an empty string
		- `timeout` is the maximum duration that a single `upcxx-run` command should take. The value is stored in seconds
		- `regex` contains the regex code needed to extract the desired values from the output
		- `outputs` contains a single line of python code that is used to output a string of values (i.e. In `json/basic/misc_perf.json`, `str(time.time())+','+p.findall(data.decode('utf-8'))[0]` combines the current time with the first extracted value of the regex for output)
		- `csv_name` contains the name that would be used to store as the CSV and image file name on the local repository.
	- `run_cron.py` is the python code that will compile and run all of the executable scripts from the available benchmark codes available in UPC++. The file runs by storing a temporary local copy of the UPC++ repository, running `gmake check` to verify installment, scraping all of the available JSON filenames (other than `example.json`), compiling the `upcxx-run` executables for the benchmark tests, and then prints out the JSON file name (the exact same JSON file name should exist in the `local/json` directory for synchronization), `csv_name` field from its JSON, and the processed output values. These printed values are then used in `cron.py` at the `local` directory.
5. Lastly, to have a test-run of your code on a particular benchmark (particularly useful for adding and testing new benchmark tests), the files at `test_run_cron.py` and `local/test_cron.py` will help you save time from the overhead of connecting to the server and re-installing the UPC++ repository (with additional `gmake check` tests).