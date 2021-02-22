import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/config/theme";
import { addDecorator } from "@storybook/react";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import "../src/styles/fonts.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const customViewports = {
  lg: {
    name: "lg",
    styles: {
      width: "1280px",
      height: "963px",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "960px",
      height: "801px",
    },
  },
  sm: {
    name: "sm",
    styles: {
      width: "600px",
      height: "801px",
    },
  },
  xs: {
    name: "xs",
    styles: {
      width: "360px",
      height: "801px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "primary",
    values: [
      {
        name: "primary",
        value: theme.palette.primary.dark,
      },
      {
        name: "light",
        value: "#fff",
      },
    ],
  },
  viewport: {
    viewports: customViewports,
  },
};

export const decorators = [muiTheme([theme])];

addDecorator((story) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    {story()}
  </StylesProvider>
));
