# carlos-dashboard

## Setup

### Clone the repository
```
$ git clone https://github.com/michelre/carlos-dashboard.git
$ cd carlos-dashboard
```

### Install NodeJS, NPM, and the dependencies
If you already have a web server, the following steps are not necessary. This is just necessary if you want to see the app working with a fake API
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get npm
$ npm i
```

### Launch the application
```
$ nodejs app.js
```
Then access to http://localhost:3000/static/index.html

### Already have a web server?
Just serve all files in the public repository as static.

### Have a real API?
Update the 'api' variable in the ./public/js/app.js file.
