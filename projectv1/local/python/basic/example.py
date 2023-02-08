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
        a.writerow(array_of_returned_values+[upcxx_version])
else:
    # Set the variable names for CSV file header (same names used later in plotting).
    # Do not modify the variable `upcxx_version` for dev work.
    variables = "timestamp,total duration (s)" + ",upcxx_version"
    os.makedirs(os.path.dirname(csv_filename), exist_ok=True)
    with open(csv_filename,'w') as fd:
        fd.write(variables+"\n")
        a = csv.writer(fd,delimiter=',')
        a.writerow(array_of_returned_values+[upcxx_version])
###########################

### Updates CSV file for outdated values ###
# Set how long a value stays valid for (1.578*10**7 seconds is equivalent to half a year).
time_to_expire_seconds = 1.578*(10**7)
# Update CSV file accordingly
data = pd.read_csv(csv_filename,error_bad_lines=False)
data = data[data['timestamp'] >= array_of_returned_values[0]-time_to_expire_seconds]
data.to_csv(csv_filename,index=False)
###########################

colors = itertools.cycle(palette)
### Prepare plot image ###
data = pd.read_csv(csv_filename)
p = figure(x_axis_type='datetime')
# Prepare plot
# E.g: For p.plot([datetime.fromtimestamp(timestamp) for timestamp in data['timestamp']], data['duration (s)']):
# We plot timestamp vs duration (s) values using `data` Panda DataFrame.
p.line(["Enter your results array here."],color=next(colors))
# Update axis details
p.xaxis.axis_label = 'x-label here'
p.yaxis.axis_label = 'y-label here'
# Set plot title
t = Title()
t.text = output[i+1]
p.title = t
# Save html of image to `perlmutter_images` directory
output_file(filename='perlmutter_images/'+benchmark_type+'/'+output[i+1]+'.html')
save(p)
###########################