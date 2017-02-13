// Import React
import React from "react";

// Import Spectacle Core tags
import {
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


const images = {
  logo: require("../assets/logo.png"),
  mjr: require("../assets/mjr.png")
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo.replace("/", "")} margin="0px auto 20px" height="200px"/>
          <Image src={images.mjr.replace("/", "")} margin="0px auto 20px" height="200px"/>

          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Vue.js 2.0
          </Text>

          <Text margin="10px 0 0" textColor="tertiary" size={3}>
            the basics
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Table of Content</Heading>
          <List>
            <ListItem>What is vue.js</ListItem>
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

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps margin="100px">The Progressive JavaScript Framework</Heading>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Approachable</TableHeaderItem>
                <TableHeaderItem>Versatile</TableHeaderItem>
                <TableHeaderItem>Performant</TableHeaderItem>
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
