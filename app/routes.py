from app import app
from flask import Flask, render_template
@app.route('/')
def home():
    return render_template('aboutus.html')
@app.route('/index')
def index():
    return render_template('aboutus.html')