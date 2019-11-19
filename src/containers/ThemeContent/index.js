import React, { useEffect } from "react";
import ThemeContent from "./ThemeContent";

const ThemeContentContainer = ({ match }) => {

  const themeTitle = match.params.id;
  const themes = ["Eby ve", "Cmon", "Lets do at", "Not bad"];

  const props = {
    themeTitle,
    themes
  };

  return <ThemeContent {...props} />
};

export default ThemeContentContainer;
