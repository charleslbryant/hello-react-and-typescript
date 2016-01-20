#Hello React and TypeScript

The purpose of this project is to accompany a little guide I'm writing to chronicle my steps to setup a web project with React and TypeScript, [Hello React and TypeScript](https://www.gitbook.com/book/charleslbryant/hello-react-and-typescript/details). I have ran through many demos, tutorials, and videos on React and TypeScript. Yet, finding up to date info on writing React apps with TypeScript was hard to do at the time I decided to write a guide as I work through the difficulties.

Actually, I started building a demo React and Flux project with TypeScript after watching a Pluralsight video. I was having a hard time converting it to TypeScript, so I decided to start with a simpler application as a way to take baby steps to get more familiar with React with TypeScript. The original repository is here [https://github.com/charleslbryant/reactfluxts](https://github.com/charleslbryant/reactfluxts), but I never  finished it. I finially figued  out that I was having some versioning issues that came from many of these technologies rapidly changing.

Anyway, if you want to get a gentle introduction to React and TypeScript, follow the guide. If you want a simple template to jumpstart your development follow the instructions below.

##Requirements

- npm package manager (Node 5.2.0 used in development)
- IE 10+ or similar modern browser that supports the History API

##Install

After cloning the repo, open a console at the root path of the repo and run

`npm install`

`tsd install`

This will install the required npm packages and TypeScript Typings.

##Run

To run the project, open a console at the root path of the repo and run

`gulp`

This will kick off the default gulp task to run all the magic and open the index.html page in a browser.