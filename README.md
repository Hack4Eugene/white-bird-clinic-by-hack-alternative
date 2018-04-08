# Whitebird Human Service Directory(<a href="http://almenshad.com:1970/" target="_blank">Demo</a>)
[Presentation Slides](https://docs.google.com)

A web application to help activity organizer divide participants into different teams.

## ScreenShots
#### Application page
![app page](http://www.super-effect.com/wp-content/uploads/2015/12/pojo-placeholder-4-1024x768.png)

## Dependecies Required to Deploy
* Node.js v6.10.x
* MongoDB v3.4.x (We are currently using an online MongoDB service `mlab`, you need this dependency unless you want to use your own database)
* [Yarn v0.23.x](https://yarnpkg.com/en/)

## How to Deploy
After you have installed Node.js and MongoDB make sure the `node`, `mongod`, `yarn`, and `npm` are in your `$PATH` environment variable. Then do the following steps.

```bash
# this will clone the 'submission' branch
git clone https://github.com/Hack4Eugene/white-bird-clinic-by-hack-alternative.git <path>

# installing all the project dependencies
cd <path>/Whitebird
npm install

# make sure mongodb is running
# sudo mongod

# to serve the web page
yarn start
```
It will be availible at
```
localhost:1970
```

### More infomation
For more information will be availible at [Wiki](https://github.com/Hack4Eugene/white-bird-clinic-by-hack-alternative/wiki)


## Technologies Deployed
* Scaffolding Tool:
	- [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
* Front-End:
	- Control
		- [Reactjs](https://facebook.github.io/react/)
		- [Redux](http://redux.js.org/)
		- [Immutablejs](https://facebook.github.io/immutable-js/)
		- [React Drag and Drop](http://react-dnd.github.io/react-dnd/)
		- [React Sticky Node](https://github.com/yahoo/react-stickynode)
	- View
		- [Material-UI](http://www.material-ui.com/)
		- [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI-React)

* Back-End:
	- [Nodejs](https://nodejs.org/en/)

* Database:
	- [Mongodb](https://nodejs.org/en/)


### Possible Issues
#### Windows
**If you get the error**

```bash
Fatal Error: spawn cmd ENOENT
```
Add `C:\Windows\System32\` to the `PATH` Environment variable


# Future Features
*
*
*
