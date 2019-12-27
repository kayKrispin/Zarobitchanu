import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const footerNavigation = [
  {
    styles: ["content-placeholder--home-btn cursor-pointer mb-0"],
    icon: <FontAwesomeIcon className="mr-2" icon={["fas", "home"]} />,
    label: "Board home"
  },
  {
    styles: ["content-placeholder--home-btn cursor-pointer mb-0"],
    icon: <FontAwesomeIcon className="mr-2" icon={["fas", "envelope"]} />,
    label: "Contact us"
  },
  {
    styles: ["content-placeholder--home-btn cursor-pointer mr-3 ml-3 mb-0"],
    icon: <FontAwesomeIcon className="mr-2" icon={["fas", "envelope"]} />,
    label: "The team"
  },
  {
    styles: ["content-placeholder--home-btn cursor-pointer mb-0"],
    icon: <FontAwesomeIcon className="mr-2" icon={["fas", "envelope"]} />,
    label: "Our location"
  }
];
