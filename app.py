from flask import Flask, render_template 
app=Flask(__name__)

@app.route("/")
def index():
    return render_template('Task 12.html')

@app.route("/Manual parsing in single action.html")
def parsingSingle():
    return render_template('Manual parsing in single action.html')

@app.route("/Manual parsing in separate actions.html")
def separateActions():
    return render_template('Manual parsing in separate actions.html')

@app.route("/Model binding (parameters).html")
def bindingParametrs():
    return render_template('Model binding (parameters).html')

@app.route("/Model binding (separate model).html")
def bindingSeparate():
    return render_template('Model binding (separate model).html')

if __name__=='__main__':
    app.run(debug=True)