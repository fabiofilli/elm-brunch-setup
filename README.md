# Elm with Brunch (build tool) setup

A [Brunch](http://brunch.io) build tool setup for [Elm](http://elm-lang.org) 0.17.

## Setup your own Elm-Brunch project
Setup your own project based on this repository. Just run the following command:

`brunch new your-app-name -s gh:fabiofilli/elm-brunch-setup`

`cd your-app-name`
`brunch watch --server`

Now you should see `Hello World!` on `http://localhost:3333/`. Have fun!

## Elm - getting started
* Install:
    * `brew install elm` on OS X
    * `npm install -g elm` on Linux, ...
* More Infos:
    * [Elm](http://elm-lang.org)

## Brunch - getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
