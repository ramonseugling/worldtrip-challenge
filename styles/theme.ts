import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
      "500": "",
    },
    black: {
      "900": "#000000",
    },
    gray: {
      "800": "#47585B",
      "600": "#999999",
      "400": "rgba(153, 153, 153, 0.5);",
      "200": "#F5F8FA",
      "50": "#FFFFFF",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "gray.800",
      },
    },
  },
});
