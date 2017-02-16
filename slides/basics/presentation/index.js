// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/style.css");

const images = {
  logo: require("../assets/logo.png"),
  mjr: require("../assets/mjr.png"),
  vue: require("../assets/vue.png"),
  popular: require("../assets/popular.png"),
  trending: require("../assets/trending.png"),
  evan: require("../assets/evan.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#4fc08d",
  tertiary: "#2c3e50",
  quartenary: "#e96900"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const notes = {
  intro: `
    Vandaag gaat de mjr dus over VueJS.
    Ikzelf ga het vooral hebben over de basics van Vue en Peter over het meer advanced gedeelte.
  `,
  tableOfContent: `
    Dus waar ik het voornamelijk over ga hebben is : (lees table of content af)
  `,
  why: `
    Maar wat is VueJS nu eigenlijk en waarom is het zeker de moeite om het eens te bekijken in 2017.
  `,
  what: `
    VueJS is approachable, hiermee bedoel ik dat wanneer je een goede basis hebt van HTML, CSS en JS, je redelijk snel overweg kan met de basics van VueJS.
    Vue heeft een redelijk kleine core, waardoor je makkelijk het kan combineren met native JS en het dus zowel in kleine als grote projecten kan gebruikt worden.
    VueJS in productie is ook redelijk klein, namelijk 17kb en het maakt gebruik van een Virtual DOM waardoor het ook super snel is.
  `,
  stats: `
    VueJS is in 2016 echt door gebroken. Zoals je kan zien is het NPM downloads met +300% gestegen. Ook het aantal github stars is met 240% gestegen tov van 2015. Het aantal page views op de website is met 470% gestegen.
    Het is in 2014 gefounded door Evan You maar kreeg pas in 2016 zijn echte doorbraak. En als we het internet mogen geloven gaat het dit jaar nog harder doorbreken.
    Tot zover een kleine introductie over wat VueJS is en waarom het zeker de moeite is om te bekijken..
  `,
  basicSetup: `
    Nu ga ik het vooral hebben over hoe begin je er nu aan? Wat heb je allemaal nodig om een "Hello World" te maken bv.
    We gaan ervan uit dat ik VueJS al heb binnengehaald :) Dit kan doormiddel van een npm, bower of een cdn..
    Het enigste dat we nodig hebben is eigenlijk een Vue instance dit we binden aan ons #app element en waar we de data als ons model bezien die properties bevat.
    Doordat we onze Vue instance aan onze #app hangen kunnen we de propertie message renderen, logischer wijs is de propertie message niet aanspreekbaar buiten ons #app element.
  `,
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary" notes={notes.intro}>
          <Image src={images.logo.replace("/", "")} margin="0px auto 20px" height="200px"/>
          <Image src={images.mjr.replace("/", "")} margin="0px auto 20px" height="200px"/>

          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Vue.js 2.0
          </Text>

          <Text margin="10px 0 0" textColor="tertiary" size={3}>
            the basics
          </Text>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="tertiary" textColor="primary" notes={notes.tableOfContent}>
          <Heading size={6} textColor="secondary" caps>Table of Content</Heading>
          <List>
            <ListItem>Why Vue.js</ListItem>
            <ListItem>
              Basic setup
              <List margin="0 0 0 90px">
                <ListItem>Hello World</ListItem>
                <ListItem>Bindings</ListItem>
              </List>
            </ListItem>
            <ListItem>Directives</ListItem>
            <ListItem>
              Components
              <List margin="0 0 0 90px">
                <ListItem>Setup</ListItem>
                <ListItem>Events</ListItem>
                <ListItem>Slots</ListItem>
              </List>
            </ListItem>
            <ListItem>Forms</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes={notes.why}>
          <Heading size={2} textColor="secondary" caps margin="100px">Why Vue.JS?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.vue.replace("/", "")} bgDarken={0.7} notes={notes.what}>
          <Heading size={6} textColor="primary" caps margin="100px">The Progressive JavaScript Framework</Heading>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem padding="10px 0px">Approachable</TableHeaderItem>
                <TableHeaderItem padding="10px 0px">Versatile</TableHeaderItem>
                <TableHeaderItem padding="10px 0px">Performant</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem textColor="primary" textSize="18">Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</TableItem>
                <TableItem textColor="primary" textSize="18">Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.</TableItem>
                <TableItem textColor="primary" textSize="18">17kb min+gzip Runtime. Blazing Fast Virtual DOM. Minimal Optimization Efforts</TableItem>
              </TableRow>
            </TableBody>
          </Table>

       </Slide>

       <Slide transition={["fade"]} bgColor="tertiary" notes={notes.stats}>
          <Heading size={3} textColor="primary" caps>Vue in 2016</Heading>

          <List textColor="primary">
            <Appear><ListItem textSize="21">NPM downloads: 1,943,567 total, 1,531,217 YTD (up from 382,184 in 2115, +300%)</ListItem></Appear>
            <Appear><ListItem textSize="21">Core repo GitHub stars: 37,664 total, ~26,000 YTD (up from ~7,600 in 2015, +240%)</ListItem></Appear>
            <Appear><ListItem textSize="21">vuejs.org page views: 21,424,759 YTD (up from 3,761,728 in 2015, +470%)</ListItem></Appear>
          </List>

          <Appear>
            <Text textColor="quartenary" textSize="18">
              <Image src={images.evan.replace("/", "")} width="300px" />
              <br />
              <br />
              Founded in 2014,
              by <a href="https://twitter.com/youyuxi" target="_blank">@youyuxi</a>
            </Text>
          </Appear>
      </Slide>

      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.popular.replace("/", "")} width="100%"/>
      </Slide>

      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.trending.replace("/", "")} width="100%"/>
      </Slide>

      <CodeSlide
        notes={notes.basicSetup}
        className="codeSlide"
        transition={["fade"]}
        lang="html"
        code={require("raw-loader!../assets/setup-html.example")}
        ranges={[
          { loc: [0, 15], title: "Basic setup" },
          { loc: [0, 3] },
          { loc: [4, 12] },
          { loc: [5, 6] },
          { loc: [6, 7] },
          { loc: [7, 10] },
          { loc: [0, 15] },
          { loc: [0, 15], note: "http://codepen.io/RobbertWolfs/pen/YNqqRJ" }
        ]}
      />

      <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
