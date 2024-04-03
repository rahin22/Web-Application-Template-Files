from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sidebar')
def sidebar():
    return render_template('sidebar.html')

if __name__ == '__main__':
    app.run(debug=True)