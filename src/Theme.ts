import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = {
  fonts: {
    heading: '"Poppins", sans-serif;',
    body: '"Poppins", sans-serif;',
  },
  colors: {
    grey: "#171923",
  },
};

export default extendTheme(theme);
