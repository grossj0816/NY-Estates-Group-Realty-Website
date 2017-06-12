from flask import Flask
import webbrowser

app = Flask(__name__)

@app.route('/')
def index():
    open('')


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
    app.run(debug=True)
