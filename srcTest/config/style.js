import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  fonts: {
    size :{
         medium: 15,
          small:12,
          large:20
    }
 } ,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
