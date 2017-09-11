
# Hello React and TypeScript

The purpose of this project is to share some of the code samples and examples from the book [Hello React and TypeScript](https://www.gitbook.com/book/charleslbryant/hello-react-and-typescript/details)  by [Charles Bryant](https://decoupledlogic.wordpress.com/). 

[ ![Codeship Status for charleslbryant/hello-react-and-typescript](https://codeship.com/projects/547ea050-a5fd-0133-eafe-326223f7077d/status?branch=master)](https://codeship.com/projects/129788)

## Requirements

- npm package manager (Node 5.2.0 used in development)
- IE 10+ or similar modern browser that supports the History API

## Install

After cloning the repo, open a console at the root path of the repo and run

`npm install`

`npm install tsd -g`

`tsd install`

This will install the required npm packages, TypeScript definition manager and TypeScript Typings.

There is an issue with the gulp package reference and I don't want to rebuild the repo to fix the tags. If you have errors related to Issue [#1](https://github.com/charleslbryant/hello-react-and-typescript/issues/1), run this command

`npm install -g "gulpjs/gulp-cli#4.0"`

## Development Run

To run the project in browser with automatic reloads on file changes, open a console at the root path of the repo and run

`gulp`

## Production Build

Run a build to release to production (doesn't open in browser, etc.).

`gulp production`

## Run Tests

`gulp test`

This will kick off the default gulp task to run all the magic and open the index.html page in a browser.

## Following the Book

If you want to work with specific examples or samples from the book look for the **Source Code** link near the code or at the beginning of a chapter. It will link to a tagged release where you can get specific revisions of the repository that contain only the changes for the example or sample.
