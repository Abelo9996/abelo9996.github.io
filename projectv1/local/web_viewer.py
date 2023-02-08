from flask import Flask, render_template
import paramiko
import pyotp
from base64 import decodebytes
from flask_autoindex import AutoIndex

app = Flask(__name__)

ppath = "images/"

app = Flask(__name__)
AutoIndex(app, browse_root=ppath)    

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)