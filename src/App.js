import React from "react";
import { Accordion, Header, Typography } from "@jota-ds/lib-react";

// https://storybook.jota.meiuca.co/static/media/jota-logotype.1df9b289..svg

function App() {
  return (
    <>
      <Header
        logoSource="https://storybook.jota.meiuca.co/static/media/jota-logotype.1df9b289..svg"
        menuList={[
          {
            label: "Label",
            tagLabel: "button",
            handleClick: () => {},
          },
        ]}
      />

      <Typography component="heading" variant="h1" size="large">
        Heading
      </Typography>

      <Typography component="subtitle" variant="h2" size="large">
        subtitle
      </Typography>

      <Typography component="paragraph" variant="h2" size="small">
        paragraph
      </Typography>

      <Accordion label="Accordion" id="your-accordion-id">
        <Typography component="paragraph" variant="h2" size="small">
          Item 01
        </Typography>
      </Accordion>

      <Accordion label="Accordion" id="your-accordion-id">
        <Typography component="paragraph" variant="h2" size="small">
          Item 01
        </Typography>
      </Accordion>

      <Accordion label="Accordion" id="your-accordion-id">
        <Typography component="paragraph" variant="h2" size="small">
          Item 01
        </Typography>
      </Accordion>
    </>
  );
}

export default App;
