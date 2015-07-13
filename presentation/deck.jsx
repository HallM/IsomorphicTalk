import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={800} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Isomorphic JavaScript
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={2} textColor="primary">
            Who am I?
          </Heading>
          <Text textColor="primary">Matt Hall</Text>
          <List textColor="primary">
            <ListItem>Developer at Bouncing Pixel</ListItem>
            <ListItem>React Afficionado</ListItem>
            <ListItem>Pushing the edge of isomorphism and React</ListItem>
            <ListItem>
              <Link href="https://github.com/Crazy50" textColor="tertiary">
                https://github.com/Crazy50
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black">
          <Heading size={1} fit textColor="primary">
            A Brief History of Webapps
          </Heading>
          <Heading size={2} fit textColor="primary">
            Everything server side
          </Heading>
          <CodePane
            lang="php"
            source={require("raw!./phpcode.text")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Everything server side
          </Heading>
          <List textColor="primary">
            <ListItem>Everything performed server side</ListItem>
            <ListItem><Appear>Linear, top to bottom, render once</Appear></ListItem>
            <ListItem><Appear>Requires server to perform all tasks all the time</Appear></ListItem>
            <ListItem><Appear>Actions require full HTML reload</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            The rise of DHTML and jQuery
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./jquery.text")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            The rise of DHTML and jQuery
          </Heading>
          <List textColor="primary">
            <ListItem>Webpages become more interactive</ListItem>
            <ListItem><Appear>Cross-browser support - enter jQuery</Appear></ListItem>
            <ListItem><Appear>Still server rendered</Appear></ListItem>
            <ListItem><Appear>So many different languages in one project</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Single Page (Load) Applications
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./angular.text")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Single Page (Load) Applications
          </Heading>
          <List textColor="primary">
            <ListItem>Moves processing to the client</ListItem>
            <ListItem><Appear>Actions are over AJAX and only transmit data</Appear></ListItem>
            <ListItem><Appear>Must wait till all the JS is downloaded before rendering</Appear></ListItem>
            <ListItem><Appear>Can hurt SEO, load time, no-JS clients</Appear></ListItem>
            <ListItem><Appear>Mobile performance feels sluggish</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic JavaScript
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./meteor.text")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic JavaScript
          </Heading>
          <List textColor="primary">
            <ListItem>NodeJS brings JavaScript to server</ListItem>
            <ListItem><Appear>Enables code sharing between server and browser</Appear></ListItem>
            <ListItem><Appear>Server rendered SPA with less work</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'fade']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Why go Isomorphic JavaScript - SEO
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Google claims to run JavaScript</Appear></ListItem>
            <ListItem><Appear>No other has admitted support yet</Appear></ListItem>
            <ListItem><Appear>Page speed is known to affect SEO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Why go Isomorphic JavaScript - Perceived Performance
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Pre-rendered content feels faster</Appear></ListItem>
            <ListItem><Appear>Can already use site while JS loads</Appear></ListItem>
            <ListItem><Appear>Even iOS native apps fake performance</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Why not go Isomorphic JavaScript
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Can still go pre-SPA days</Appear></ListItem>
            <ListItem><Appear>Requires use of isomorphic tools</Appear></ListItem>
            <ListItem><Appear>Loading first page has an extra expense</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Range of Isomorphic Apps
          </Heading>
          <Layout>
            <Fill>
              <List textColor="primary">
                <ListItem><Appear fid="1">Fewer abstractions</Appear></ListItem>
                <ListItem><Appear fid="3">Simple</Appear></ListItem>
                <ListItem><Appear fid="5">Share templates</Appear></ListItem>
              </List>
            </Fill>
            <Fill>
              <List textColor="primary">
                <ListItem><Appear fid="2">Many abstractions</Appear></ListItem>
                <ListItem><Appear fid="4">Complex</Appear></ListItem>
                <ListItem><Appear fid="6">Share templates, logic, everything</Appear></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic Tools
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Rendr from Airbnb</Appear></ListItem>
            <ListItem><Appear>Meteor</Appear></ListItem>
            <ListItem><Appear>Derby JS</Appear></ListItem>
            <ListItem><Appear>React</Appear></ListItem>
            <ListItem><Appear>
              <Link href="http://isomorphic.net/libraries" textColor="tertiary">
                http://isomorphic.net/libraries
              </Link>
            </Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic Tools - Rendr
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Built by Airbnb</Appear></ListItem>
            <ListItem><Appear>Use familiar Backbone JS</Appear></ListItem>
            <ListItem><Appear>Render Backbone on server</Appear></ListItem>
            <ListItem><Appear>Use your own template engine</Appear></ListItem>
            <ListItem><Appear>Express middleware to make server easy</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic Tools - Meteor
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Environment specific code conditionally wrapped</Appear></ListItem>
            <ListItem><Appear>Data op framework built in</Appear></ListItem>
            <ListItem><Appear>Can interact with React, Angular, RethinkDB, Firebase</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic Tools - Derby JS
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Isomorphic MVC Framework</Appear></ListItem>
            <ListItem><Appear>Built with real-time + collaboration in mind</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Isomorphic Tools - React
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Facebook, Airbnb, Reddit Mobile, Netflix, ...</Appear></ListItem>
            <ListItem><Appear>Client side picks up after server</Appear></ListItem>
            <ListItem><Appear>Separation of Components not languages</Appear></ListItem>
            <ListItem><Appear>Flux, React-Router, Relay, FalcorJS</Appear></ListItem>
            <ListItem><Appear>Alt, Redux, Fluxible, MartyJS - Isomorphic Flux</Appear></ListItem>
            <ListItem><Appear>"Rehydrate" Flux stores</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Can we share 100%?
          </Heading>
          <Text textColor="primary">
            Enviroments have different methods
          </Text>
          <List textColor="primary">
            <ListItem><Appear>Loading modules - Require</Appear></ListItem>
            <ListItem><Appear>Working with Cookies</Appear></ListItem>
            <ListItem><Appear>Data fetching - XHR or http</Appear></ListItem>
            <ListItem><Appear>Routing - HTML5/Hash or Req</Appear></ListItem>
            <ListItem><Appear>View - String or DOM</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            How to handle the differences
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Browserify and Webpack</Appear></ListItem>
            <ListItem><Appear>Use an isomorphic library</Appear></ListItem>
            <ListItem><Appear>set-cookie, Superagent, React-Router</Appear></ListItem>
            <ListItem><Appear>Swap code using Browserify or Webpack</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Browserify and Webpack
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>CommonJS for the browser</Appear></ListItem>
            <ListItem><Appear>Shim some environment differences</Appear></ListItem>
            <ListItem><Appear>Helps shim own files</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            Shim Server and Client Only Code
          </Heading>
          <Text textColor="primary">Using package.json browser field</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./browserify.text")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Heading size={2} fit textColor="primary">
            "Super"morphic?
          </Heading>
          <List textColor="primary">
            <ListItem><Appear>Can we share code on even more platforms?</Appear></ListItem>
            <ListItem><Appear>React for web, React-Native for mobile</Appear></ListItem>
            <ListItem><Appear>Cordova/Phonegap for mobile</Appear></ListItem>
            <ListItem><Appear>Electron and NW.js for Win/OSX/Nix</Appear></ListItem>
            <ListItem><Appear>Nashorn in JVM, v8js in PHP, many more</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="black">
            Quick Demo
          </Heading>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
