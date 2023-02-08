array_of_returned_values = [float(i) for i in output[i+2].split(',')]

csv_filename = "perlmutter_data/"+benchmark_type+"/"+output[i+1]+".csv"

csv_file_exists_bool = exists(csv_filename)
if csv_file_exists_bool:
    with open(csv_filename,'a') as fd:
        a = csv.writer(fd,delimiter=',')
        a.writerow(array_of_returned_values+[upcxx_version])
else:
    variables = "timestamp,duration (s)"+",upcxx_version"
    os.makedirs(os.path.dirname(csv_filename), exist_ok=True)
    with open(csv_filename,'w') as fd:
        fd.write(variables+"\n")
        a = csv.writer(fd,delimiter=',')
        a.writerow(array_of_returned_values+[upcxx_version])

time_to_expire_seconds = 1.578*(10**7)
data = pd.read_csv(csv_filename,error_bad_lines=False)
data = data[data['timestamp'] >= array_of_returned_values[0]-time_to_expire_seconds]
data.to_csv(csv_filename,index=False)

colors = itertools.cycle(palette)
data = pd.read_csv(csv_filename)
p = figure(x_axis_type='datetime')
p.line([datetime.fromtimestamp(timestamp) for timestamp in data['timestamp']], data['duration (s)'],color=next(colors))
p.xaxis.axis_label = 'Date'
p.yaxis.axis_label = 'Duration (s)'
t = Title()
t.text = output[i+1]
p.title = t
output_file(filename='perlmutter_images/'+benchmark_type+'/'+output[i+1]+'.html')
save(p)