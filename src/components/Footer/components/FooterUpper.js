import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterUpper = () => {

  const socialItems = ["facebook-f", "apple", "twitter", "google", "codepen", "digg", "pinterest"];

  const handleSocialItems = () => {
   return socialItems.map(value => (
        <div key={value} className="upper--item mr-1 ml-1">
          <FontAwesomeIcon size="lg" icon={["fab", value]}/>
        </div>
      )
    )
  };

    return (
      <div className="upper d-flex align-items-center">
        <div className="upper--inner-container d-flex align-items-center pt-5">
          {
            handleSocialItems()
          }
        </div>
      </div>
    )

};
export default FooterUpper;
