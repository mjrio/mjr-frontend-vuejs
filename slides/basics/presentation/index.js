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
  evan: require("../assets/evan.png"),
  lifecycle: require("../assets/lifecycle.png"),
  micdrop: require("../assets/micdrop3.gif")
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
    <br ><br> De basics kan je vooral vergelijken met Angular 1.
  `,
  tableOfContent: `
    Dus waar ik het voornamelijk over ga hebben is : (lees table of content af). 

    <ul>
      <li>Waarom heb ik voor vue gekozen en waarom is het zeker de moeite om het eens zelf te bezien.</li>
      <li>Hoe begin je er nu aan?</li>
      <li>Een kijkje nemen naar de "core" van Vue: de predefined directives.</li>
      <li>Hoe creër je resuable html code?</li>
      <li>Enkele voordelen van Vue voor formulieren.</li>
      <li>VueJS vergelijken met Angular en React.</li>
    </ul>
  `,
  what: `
    VueJS is approachable, hiermee bedoel ik dat wanneer je een goede basis hebt van HTML, CSS en JS, je redelijk snel overweg kan met de basics van VueJS.
    <br><br>
    Vue heeft een redelijk kleine core, waardoor je makkelijk het kan combineren met native JS en het dus zowel in kleine als grote projecten kan gebruikt worden.
    <br><br>
    VueJS in productie is ook redelijk klein, namelijk 17kb en het maakt gebruik van een Virtual DOM waardoor het ook super snel is.
  `,
  stats: `
    VueJS is in 2016 echt door gebroken. Zoals je kan zien is het NPM downloads met +300% gestegen.
    <br><br>
    Ook het aantal github stars is met 240% gestegen tov van 2015. Het aantal page views op de website is met 470% gestegen.
    <br><br>
    Het is in 2014 gefounded door Evan You maar kreeg pas in 2016 zijn echte doorbraak. En als we het internet mogen geloven gaat het dit jaar nog harder doorbreken.
    <br><br>
    Tot zover een kleine introductie over wat VueJS is en waarom het zeker de moeite is om te bekijken..
  `,
  basicSetup: `
    Nu ga ik het vooral hebben over hoe begin je er nu aan? Wat heb je allemaal nodig om bv. een "Hello World" te maken.
    <br><br>

    We gaan ervan uit dat ik VueJS al heb binnengehaald :) Dit kan doormiddel van een npm, bower of een cdn..
    <br><br>
    Het enigste dat we nodig hebben is eigenlijk een Vue instance, deze instance heeft een object nodig met opties. Deze opties kunnen data, template, el (to mount), methods, lifecycle callbacks, ...  Zoals we in het voorbeeld zien binden we onze instance aan ons #app element en waar we de data als ons model bezien die properties bevat.
    <br><br>

    Doordat we onze Vue instance aan onze #app hangen kunnen we de propertie message renderen, logischer wijs is de propertie message niet aanspreekbaar buiten ons #app element.
    <br><br>
    Om de properties in het data object reactive te maken moeten we ze declareren in ons data object. Wanneer we nadien een propertie willen toevoegen is dit niet reactive.

    <br > <br > 
    const app = new Vue({}); 
    <br >
    app.foo = 'test'; // dit is niet reactive, tenzij we het predefinen op ons data object
  `,
  lifecyclehook: `
      Lifecycle hooks geven ons de opportuniteit om logica uit te voeren tijdens het initializatie process.
      <br > <br > 
      Hier op dit diagram zie je het hele initializatie process en de callback hooks waar we op kunnen inspelen.
  `,
  directives: `
    Zij die angular kennen, als in: iedereen waarschijnlijk, gaan hier redelijk snel mee mee zijn. (overloop de verschillende directives). 
     <br > <br > 
     Zoals je op het eerste zicht kan zien is het "grote" verschil de v- prefix. Wat ook opvalt is de v-on, bij angular heb je gewoon de ng-click en de ng-change etc.. <br > <br > 
    Bij vuejs maak je gebruik van v-on:click. Ik laat het even zien in een codepen die ik voorbereid heb om het beter uit te leggen. (laat ook zeker de shorthands voor v-bind (:title) en v-on (@click) zien ;) 
  `,
  globalDirectives: `
    Wanneer je een directive wilt maken die over heel het project beschikbaar moet zijn moet je hem global maken. Hierdoor is hij overal beschikbaar. 
    <br > <br > 
    Een directive heeft altijd de v-prefix (wat ik wel jammer vind omdat je zo niet u eigen directives kan onderscheiden van vue directives)..
    <br > <br > 
    Je moet er ook altijd voor zorgen dat de directive gedeclareerd is voor hij gebruikt wordt. De eerste propertie is de directive name, met een object als 2de propertie.
  `,
  localDirectives: `
    Wanneer je een feature specifieke directive wilt maken kan je gebruik maken van een local directive, deze moet je declareren in de Vue instance onder het directive gedeelte. de item name wordt de directive name.
  `,
  components: `
    Ook in Vue kan je gebruik maken van components om herbruikbare html code op te splitsen. Om zo je logica van bv een bepaalde feature te scheiden en beter onderhoudbaar te maken. 

    <br ><br >
    Net zoals bij directives kan je ook hier kiezen voor een global of een local component. 
  `,
  globalComponents: `
    Om een global component te maken kan je gebruik maken van "Vue.component(tagName, options)". 
     <br ><br >
     De component moet geregistreerd zijn VOOR hij gebruikt wordt.  
  `,
  localComponents: `
    Om een component locaal te registreren kan je gebruiken maken van de "components instance option". Waarbij de key, the component name wordt en de value de options.

    <br><br>
    Voor zij die goed hebben opgelet, hebben het misschien al gezien. Bij components moet de "data" property namelijk een functie zijn dat een object returned ipv een object zelf. Zo krijgen ze allemaal een eigen internal state.
    Bij Vue instance is dit niet nodig aangezien je dit mount aan een element.

    <br><br>
    Wat ook nodig is bij components is dat de template 1 root element moet bevatten!    

  `,
  props: `
    Props gebruiken we om data door te geven aan onze components. Een voorbeeld is om bv van een parent data door te geven aan een child component. Waarbij het child de doorgekregen data kan renderen. 
    <br ><br >
    (next slide)
     <br ><br >

     Zoals we in het voorbeeld zien krijgen we de propertie "message" door. van onze parent. Wanneer we een dynamic property willen doorgeven moeten we gebruik maken van de v-bind optie. 
     <br >
     Anders geven we niet de property message door maar gewoon de tekst "message".

     <br ><br >
    Waar we zeker rekening mee moeten houden is dat we in onze child component niet rechtstreeks onze doorgekregen prop gaan aanpassen. Want de moment dat deze propertie in onze parent component gewijzigd wordt, wordt deze ook gewijzigd in onze child component.
    Indien we in onze child component toch de data willen aanpassen moeten we gebruik maken van een "computed property" of de property aan een local property hangen. 
    
  `,
  validation: `
    Een voordeel bij props is dat je ook kan definieren welk type van waarde je verwacht als propertie. Voor zover ik me kan herrinneren kan je dit bij Angular bv niet, tenzij je typescript gebruikt? 
    <br><br>
    Alsook kan je zeggen of de property required is of een default waarde aan meegeven. Wat wel super handig is, want bv bij NG1 moet je dan in de $onInit een default waarde gaan zetten. Maar dit kan soms verwarrend overkomen aangezien het op een "andere" plaats staat.
     <br ><br >
    (demo: show console log errors when validation fails)
  `,
  events: `
    Nu we weten hoe we data doorgeven aan onze child components, is het tijd om te leren hoe we onze parent kunnen laten weten van een change. 
    Dit kan door een event te "emitten. 

    <br><br>
    (next slide)
    <br><br>

    De parent component kan luisteren naar een event door gebruik te maken van v-on:eventName dat door de child is ge-emit door $emit('eventName').
    <br>
    Het is niet mogelijk om $on te gebruiken in de parent component, dit moet door middel van v-on.
  `,
  forms: `
    Door gebruik te maken van v-model kunnen we two-way binding creëeren. 
  `,
  modifiers: `
    Vue heeft ook een eigen set aan modifiers. Ik vind deze persoonlijk super handig om snel en overzichtelijk. Vue heeft 3 soorten modifiers: 

    <br ><br >
    <ul>
      <li>Event Modifiers: hiermee kan je rechtstreeks een event gaan tegen houde door behulp van bv e.preventDefault</li>
      <li>Key Modifiers: luister rechstreeks op een specifieke keycode, super handig omdat je niet altijd alle keycodes van buiten kent. Ook heb je de mogelijk om zelf custom keycodes toe te voegen.</li>
      <li>Modifier Keys: maak gebruik van extra keys voor een bepaalde event op te roepen</li>
    </ul>
  `,
  slots: `
    Slots kan je volgens mij het best vergelijken met transclude in angular. Hiermee kan je bv makkelijk een setup doen van je layout zonder dat je moet weten welke content er gebruikt wordt. 
    Je kan een tot meerdere slots gebruiken. Wanneer je 1 slot gebruikt wordt de content rechtstreeks in deze "default" slot gerenderd. Wanneer je gebruik maakt van multiple slots moet je de slots voorzien van een "name" attribute.

    <br ><br> 
    (next slide)
    <br ><br> 
    Hierdoor kan je specifiek zeggen welke content in welke slot moet komen. Wanneer je meerdere slots gebruikt, kan er maximaal 1 unnamed slot zijn. 
     <br ><br> 
    In ons voorbeeld zie je dat we een component hebben met 2 named slots en 1 unnamed slot.
  `,
  scopedSlots: `
    Scoped slots vond ik in niet super duidelijk in het begin dus ik ga het proberen zo goed mogelijk uit te leggen :)
    <br ><br >

    Hiermee kan je properties doorgeven van je child component die mee binnen de slot moeten gerendered worden. Deze propertie moet je dan gebruiken in je parent component waar je de rest van de content zet.

    <br ><br >
  Om dit te bereiken maken we gebruik van  "template" met een "scope" attribute.    
  `
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
          <List textSize="15">
            <ListItem>Introduction</ListItem>
            <ListItem>
              Basic setup
              <List margin="0 0 0 90px">
                <ListItem>Setup</ListItem>
                <ListItem>Lifecyle hooks</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Directives
              <List margin="0 0 0 90px">
                <ListItem>Global</ListItem>
                <ListItem>Local</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Components
              <List margin="0 0 0 90px">
                <ListItem>Setup</ListItem>
                <ListItem>Props</ListItem>
                <ListItem>Events</ListItem>
                <ListItem>Slots</ListItem>
              </List>
            </ListItem>
            <ListItem>Forms</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Introduction</Heading>
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
          <Text textColor="quartenary" textSize="18">
            <Image src={images.evan.replace("/", "")} width="300px" />
            <br />
            <br />
            Founded in 2014,
            by <a href="https://twitter.com/youyuxi" target="_blank">@youyuxi</a>
          </Text>

          <Appear><Heading size={6} textColor="secondary" caps margin="30px 0 0">Vue in 2016</Heading></Appear>

          <List textColor="primary">
            <Appear>
              <ListItem textSize="21">NPM downloads:
                <List textColor="quartenary" margin="0 0 0 40px">
                  <ListItem textSize="21">
                    1,943,567 total
                  </ListItem>
                  <ListItem textSize="21">
                   1,531,217 YTD
                  </ListItem>
                  <ListItem textSize="21">
                   up from 382,184 in 2015, +300%
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="21">Core repo GitHub stars
                <List textColor="quartenary" margin="0 0 0 40px">
                  <ListItem textSize="21">
                    37,664 total
                  </ListItem>
                  <ListItem textSize="21">
                   ~26,000 YTD
                  </ListItem>
                  <ListItem textSize="21">
                   up from ~7,600 in 2015, +240%
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="21">vuejs.org page views
                <List textColor="quartenary" margin="0 0 0 40px">
                  <ListItem textSize="21">
                    21,424,759 YTD
                  </ListItem>
                  <ListItem textSize="21">
                   up from 3,761,728 in 2015, +470%
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
          </List>
      </Slide>

      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.popular.replace("/", "")} width="100%"/>
      </Slide>

      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.trending.replace("/", "")} width="100%"/>
      </Slide>

      <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Basic Setup</Heading>
      </Slide>

      <CodeSlide
        notes={notes.basicSetup}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/setup-html.example")}
        ranges={[
          { loc: [0, 15], title: "Setup" },
          { loc: [0, 3] },
          { loc: [4, 12] },
          { loc: [5, 6] },
          { loc: [6, 7] },
          { loc: [7, 10] },
          { loc: [0, 15] },
          { loc: [0, 15], note: "http://codepen.io/RobbertWolfs/pen/oBRyVK" }
        ]}
      />

      <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps margin="100px">Lifecycle Hooks</Heading>
      </Slide>

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={notes.lifecyclehook}>
          <Image className="lifecycle" src={images.lifecycle.replace("/", "")} width="45%"/>
      </Slide>

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={notes.directives}>
          <Heading size={2} textColor="secondary" caps margin="100px">Directives</Heading>

          <List>
             <Appear><ListItem>v-bind</ListItem></Appear>
             <Appear><ListItem>v-if</ListItem></Appear>
             <Appear><ListItem>v-show</ListItem></Appear>
             <Appear><ListItem>v-for</ListItem></Appear>
             <Appear><ListItem>v-on</ListItem></Appear>
             <Appear><ListItem>v-model</ListItem></Appear>
          </List>

           <Appear><Text margin="10px 0 0" textColor="tertiary" size={3}>
            <a className="dark" href="http://codepen.io/RobbertWolfs/pen/OWYwPp" target="_blank">Codepen demo</a>
          </Text></Appear>
      </Slide>

      <Slide transition={["fade"]} bgColor="tertiary" notes={notes.customDirectives}>
          <Heading size={4} textColor="secondary" caps>Custom Directives</Heading>
          <Text margin="50px 0 0" lineHeight="1.5" textColor="primary">
            When you just need some low-level DOM access on plain elements, you could create a custom directive. <br /> <br /> You can register a global or a local directive.
          </Text>
      </Slide>

      <CodeSlide
        notes={notes.globalDirectives}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/global-directives.example")}
        ranges={[
          { loc: [0, 20], title: "Global directives" },
          { loc: [11, 14] },
          { loc: [0, 3] },
          { loc: [5, 10] },
          { loc: [5, 6] },
          { loc: [6, 9] },
          { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/vgwaWg" }
        ]}
      />

      <CodeSlide
        notes={notes.localDirectives}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/local-directives.example")}
        ranges={[
          { loc: [0, 20], title: "Local directives" },
          { loc: [5, 16] },
          { loc: [0, 3] },
          { loc: [8, 15] },
          { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/YNbjvN" }
        ]}
      />

       <Slide transition={["fade"]} bgColor="tertiary" notes={notes.components}>
          <Heading size={4} textColor="secondary" caps>Components</Heading>
          <Text margin="50px 0 0" lineHeight="1.5" textColor="primary">
            Components are one of the most powerful features of Vue. They help you extend basic HTML elements to encapsulate reusable code.
          </Text>
      </Slide>

      <CodeSlide
        notes={notes.globalComponents}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/global-components.example")}
        ranges={[
          { loc: [0, 20], title: "Global components" },
          { loc: [14, 17] },
          { loc: [0, 3] },
          { loc: [8, 13] },
          { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/bgPPyv" }
        ]}
      />

      <CodeSlide
        notes={notes.localComponents}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/local-components.example")}
        ranges={[
          { loc: [0, 20], title: "Local components" },
          { loc: [5, 16] },
          { loc: [0, 3] },
          { loc: [7, 15] },
          { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/dNBxyp" }
        ]}
      />
      
      <Slide transition={["fade"]} bgColor="tertiary" notes={notes.props}>
          <Heading size={6} textColor="primary" caps>Props</Heading>
          <Text margin="50px 0 0" lineHeight="1.5" textColor="primary">Every component instance has its own isolated scope. This means you cannot (and should not) directly reference parent data in a child component’s template. Data can be passed down to child components using props.</Text>
      </Slide>

      <CodeSlide
        notes={notes.props}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/props.example")}
        ranges={[
          { loc: [0, 20], title: "Props" },
          { loc: [12, 16] },
          { loc: [0, 4] },
          { loc: [6, 12] },
          { loc: [9, 10] },
          { loc: [2, 3] },
          { loc: [10, 11] },
          { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/XpLvXr" }
        ]}
      />

      <CodeSlide
        notes={notes.validation}
        className="codeSlide"
        transition={[""]}
        lang="js"
        code={require("raw-loader!../assets/prop-validation.example")}
        ranges={[
          { loc: [0, 29], title: "Props validation" },
          { loc: [2, 4] },
          { loc: [4, 6] },
          { loc: [6, 11] },
          { loc: [11, 16] },
          { loc: [16, 22] },
          { loc: [22, 26] },
          { loc: [0, 29], note: "http://codepen.io/RobbertWolfs/pen/KajOzJ" }
        ]}
      />

        <Slide transition={["fade"]} bgColor="tertiary" notes={notes.events}>
          <Heading size={6} textColor="primary" caps>Events</Heading>
          <Text margin="50px 0 0" lineHeight="1.5" textColor="primary">Every Vue instance implements an events interface, which means it can:</Text>
          <List>
            <ListItem>Listen to an event: $on(eventName)</ListItem>
            <ListItem>Trigger an event: $emit(eventName)</ListItem>
          </List>
      </Slide>

      <CodeSlide
        notes={notes.events}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/events.example")}
        ranges={[
          { loc: [0, 35], title: "Events" },
          { loc: [22, 33] },
          { loc: [0, 5] },
          { loc: [7, 21] },
          { loc: [9, 14] },
          { loc: [8, 9] },
          { loc: [14, 20] },
          { loc: [17, 18] },
          { loc: [2, 3] },
          { loc: [27, 32] },
          { loc: [1, 2] },
          { loc: [0, 35], note: "http://codepen.io/RobbertWolfs/pen/rjEXjN" }
        ]}
      />

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" notes={notes.modifiers}>
        <Heading size={6} textColor="tertiary" caps>Modifiers</Heading>

        <Table>
            <TableHeader>
              <TableRow textColor="quartenary">
                <Appear>
                  <TableHeaderItem padding="10px" textSize="40">Event Modifiers</TableHeaderItem>
                </Appear>
                <Appear>
                  <TableHeaderItem padding="10px" textSize="40">Key Modifiers</TableHeaderItem>
                </Appear>
                <Appear>
                  <TableHeaderItem padding="10px" textSize="40">Modifier Keys</TableHeaderItem>
                </Appear>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <Appear>
                  <TableItem textColor="secondary" textSize="25">
                    .stop<br />
                    .prevent<br />
                    .capture<br />
                    .self<br />
                    .once<br />
                  </TableItem>
                </Appear>
                <Appear>
                  <TableItem textColor="secondary" textSize="25">
                    .enter <br/>
                    .tab <br/>
                    .delete<br/>
                    .esc <br/>
                    .space <br/>
                    .up <br/>
                    .down <br/>
                    .left <br/>
                    .right <br/>
                  </TableItem>
                </Appear>
                <Appear>
                  <TableItem textColor="secondary" textSize="25">
                    .ctrl <br />
                    .alt <br />
                    .shift <br />
                    .meta <br />
                  </TableItem>
                </Appear>
              </TableRow>
            </TableBody>
          </Table>
      </Slide>

      <CodeSlide
        notes={notes.eventModifiers}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/event-modifiers.example")}
        ranges={[
          { loc: [0, 11], title: "Event Modifiers" },
          { loc: [0, 2] },
          { loc: [3, 5] },
          { loc: [6, 8] },
          { loc: [9, 11] },
          { loc: [0, 11], note: "http://codepen.io/RobbertWolfs/pen/KaOrMq" }
        ]}
      />

      <CodeSlide
        notes={notes.keyModifiers}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/key-modifiers.example")}
        ranges={[
          { loc: [0, 11], title: "Key Modifiers" },
          { loc: [0, 2] },
          { loc: [3, 5] },
          { loc: [6, 9] },
          { loc: [0, 11], note: "http://codepen.io/RobbertWolfs/pen/RKXqLP" }
        ]}
      />

      <CodeSlide
        notes={notes.modifierKeys}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/modifier-keys.example")}
        ranges={[
          { loc: [0, 6], title: "Modifier Keys" },
          { loc: [0, 2] },
          { loc: [3, 5] },
          { loc: [0, 6], note: "http://codepen.io/RobbertWolfs/pen/qReQyz" }
        ]}
      />

      <Slide transition={["slide"]} bgColor="primary" notes={notes.slots}>
        <Heading size={6} textColor="tertiary" caps margin="100px">Slots</Heading>
      </Slide>

      <CodeSlide
        notes={notes.slots}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/slots.example")}
        ranges={[
          { loc: [0, 27], title: "Named slots" },
          { loc: [10, 25] },
          { loc: [14, 15] },
          { loc: [17, 18] },
          { loc: [20, 21] },
          { loc: [0, 8] },
          { loc: [1, 2] },
          { loc: [14, 15] },
          { loc: [3, 5] },
          { loc: [17, 18] },
          { loc: [6, 7] },
          { loc: [20, 21] },
          { loc: [0, 27], note: "http://codepen.io/RobbertWolfs/pen/WRVLBW" }
        ]}
      />

      <CodeSlide
        notes={notes.scopedSlots}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/scoped-slots.example")}
        ranges={[
          { loc: [0, 27], title: "Scoped slots" },
          { loc: [0, 1] },
          { loc: [11, 23] },
          { loc: [14, 20] },
          { loc: [15, 19] },
          { loc: [3, 10] },
          { loc: [6, 7] },
          { loc: [17, 18] },
          { loc: [0, 27], note: "http://codepen.io/RobbertWolfs/pen/JEgxdJ" }
        ]}
      />

      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={2} textColor="secondary" caps margin="100px">Forms</Heading>
      </Slide>

      <CodeSlide
        notes={notes.forms}
        className="codeSlide"
        transition={[""]}
        lang="html"
        code={require("raw-loader!../assets/forms.example")}
        ranges={[
          { loc: [0, 30], title: "Forms" },
          { loc: [20, 29] },
          { loc: [1, 2] },
          { loc: [3, 4] },
          { loc: [5, 6] },
          { loc: [7, 11] },
          { loc: [12, 17] },
          { loc: [0, 30], note: "http://codepen.io/RobbertWolfs/pen/ggVYPq" }
        ]}
      />

      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Usefull resources</Heading>
          <List>
            <ListItem><a className="dark" href="https://vuejs.org/" target="_blank">VueJS website</a></ListItem>
            <ListItem><a className="dark" href="https://github.com/vuejs/vue-devtools" target="_blank">Dev tools</a></ListItem>
            <ListItem><a className="dark" href="https://github.com/vuejs/awesome-vue" target="_blank">Awesome vue</a></ListItem>
            <ListItem><a className="dark" href="http://codepen.io/collection/nxZjoR" target="_blank">Codepen List of my demo's</a></ListItem>
            <ListItem><a className="dark" href="https://vuejs.org/v2/guide/comparison.html" target="_blank">Comparisation : Vue vs ...</a></ListItem>
          </List>
      </Slide>

      <Slide transition={["slide"]} bgImage={images.micdrop.replace("/", "")}  />

      </Deck>
    );
  }
}
