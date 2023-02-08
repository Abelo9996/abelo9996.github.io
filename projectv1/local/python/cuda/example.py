# output[i+1] is the CSV filename (without extension)
# output[i+2] is the returned string of benchmark values

# Pre-process returned string of benchmark values.
# E.g: For array_of_returned_values = [float(i) for i in output[i+2].split(',')]:
# We set `array_of_returned_values` to store float values of values (output[i+2.split(',')] returns array of retrieved values)
array_of_returned_values = []

# Set CSV filename (no need to change).
csv_filename = "perlmutter_data/"+benchmark_type+"/"+output[i+1]+".csv"

### Create CSV file (if it does not already exist) and add new values. ###
csv_file_exists_bool = exists(csv_filename)
if csv_file_exists_bool:
    with open(csv_filename,'a') as fd:
        a = csv.writer(fd,delimiter=',')
        a.writerow(array_of_returned_values)
else:
    # Set the variable names for CSV file header (same names used later in plotting).
    variables = "timestamp,total duration (s)"
    os.makedirs(os.path.dirname(csv_filename), exist_ok=True)
    with open(csv_filename,'w') as fd:
        fd.write(variables+"\n")
        a = csv.writer(fd,delimiter=',')
        a.writerow(array_of_returned_values)
###########################

### Updates CSV file for outdated values ###
# Set how long a value stays valid for (1.578*10**7 is equivalent to half a year).
time_to_expire_seconds = 1.578*(10**7)
# Update CSV file accordingly
data = pd.read_csv(csv_filename,error_bad_lines=False)
data = data[data['timestamp'] >= array_of_returned_values[0]-time_to_expire_seconds]
data.to_csv(csv_filename,index=False)
###########################

### Prepare plot image ###
data = pd.read_csv(csv_filename)
plt.figure()
# Prepare plot
# E.g: For plt.plot([datetime.fromtimestamp(timestamp) for timestamp in data['timestamp']], data['duration (s)']):
# We plot timestamp vs duration (s) values using `data` Panda DataFrame.
plt.plot(['Prepare array here.'])
# Update axis details
plt.xlabel('x-label here')
plt.ylabel('y-label here')
plt.xticks(fontsize=4)
# Set title font size
plt.rcParams["axes.titlesize"] = 8
# Save image to `perlmutter_images` directory
plt.title(output[i+1])
plt.savefig('perlmutter_images/'+benchmark_type+'/'+output[i+1]+'.png')
###########################