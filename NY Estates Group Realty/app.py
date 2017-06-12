from flask import Flask, render_template
from flask_material import Material
from flask_wtf import Form, RecaptchaField
from flask_wtf.file import FileField
from wtforms import TextField, HiddenField, ValidationError, RadioField,\
    BooleanField, SubmitField, IntegerField, FormField, validators
from wtforms.validators import Required


app = Flask(__name__)
Material(app)


@app.route('/')
def index():
    return render_template('/IndexPage.html')

@app.route('/about')
def about():
    return render_template('/MissionPage.html')

@app.route('/services')
def services():
    return render_template('ServicesPage.html')

@app.route('/team')
def team():
    return render_template('/TeamPage.html')

@app.route('/member1')
def member1():
    return  render_template('/TeamMemberPage1.html')

@app.route('/member2')
def member2():
    return render_template('/TeamMemberPage2.html')

@app.route('/member3')
def member3():
    return render_template('/TeamMemberPage3.html')

@app.route('/member4')
def member4():
    return render_template('/TeamMemberPage4.html')


if __name__ == '__main__':
    app.run()
