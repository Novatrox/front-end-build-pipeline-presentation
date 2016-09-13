# Fron-End Build Pipeline Presentation
In this repo you will find the presentation and code for [Chris Klug's](https://www.twitter.com/ZeroKoll) presentation about front-end build pipelines called "I say front-end build pipeline, you say WAT"

## Set up
The code should work by just pressing F5 in Visual Studio. However, you do have to restore all of the NPM and Bower components by running
```
npm install
```
and
```
bower install
```
before it works. It might also cause problems if you try opening the project in Visual Studio before these commands have been run, as it will try to start the Gulp task called "watch" when the project is opened.