#Isomorphic Javascript
Presentation given at NodeJS Houston July 2015
Built using FormidableLabs' Spectacle
https://github.com/FormidableLabs/spectacle

##Getting Started

Your first order of business is to open terminal and run `npm install`

Then, to start up the local server, run `npm start`

Open a browser and hit `http://localhost:3000`, and we are ready to roll

## Build & Deploy

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

## Presenting

Spectacle comes with a built in presenter mode. It shows you a slide lookahead, current time and your current slide.

To present:

- Run `npm start`
- Open two browser windows on two different screens
- On your screen visit [http://localhost:3000/#/?presenter](http://localhost:3000/#/)
- On the presentation screen visit [http://localhost:3000/#/](http://localhost:3000/#/)
- Give an amazingly stylish presentation

_Note: Any windows/tabs in the same browser that are running Spectacle will sync to one another, even if you don't want to use presentation mode_

You can toggle the presenter or overview mode by pressing respectively `p` and `o`.

## PDF Export

Exporting a totally sweet looking PDF from your totally sweet looking Spectacle presentation is asburdly easy.

- Run `npm start`
- Hit [http://localhost:3000/#/?export](http://localhost:3000/#/?export)
- Bring up the print dialog `(ctrl or cmd + p)`
- Check "Background Graphics" to on if you are about that life
- Change destination to "Save as PDF"

If you want to print your slides, and want a printer friendly version, simply repeat the above process but instead print from [http://localhost:3000/#/?export&print](http://localhost:3000/#/?export&print)
