# Once Upon Nothing

Simple application to generate basic random sentences. Will then put them into a nonsensical story. Online demo [available here](https://clementrivaille.github.io/once-upon-nothing/).

This project is an experiment to use Typescript, Angular 2, and Electron.

## Install

**NodeJS** is required to use this application. Then use _npm_ to install dependancies:

```
npm installl
```

## Run server

To run the web application, use:

```
npm run start
```

or

```
gulp
```

## Local app

The local application allow you to open the app with Electron, and to save your vocabulary changes.

Use this command to create a binary:

```
npm run app-build
```

This should generate a folder in _release_ that contains the built application and a binary. Simply run that binary to launch the app.

Your local vocabulary will be saved in this folder, so if you want to rebuild, be sure to copy your vocabulary file elsewhere if you cant to keep it!

_So far I have only test the local application in Linux Mint._
