import React from "react";
import { footerNavigation } from "./FooterNavigation";

const FooterBottom = () => (
  <div className="bottom d-flex justify-content-between pl-4 pr-4 pb-3 pt-3 align-items-center">
    {
      footerNavigation.slice(0, 1).map(({ styles, icon, label }, index) => (

        <p key={index} className={styles.join()}>
          {icon}
          <span className="title">{label}</span>
        </p>
      ))
    }
    <div className="d-flex align-items-center">
      {
        footerNavigation.slice(1).map(({ styles, icon, label }, index) => (
          <p key={index} className={styles.join(" ")}>
            {icon}
            <span className="title">{label}</span>
          </p>

        ))
      }
    </div>
  </div>
);

export default FooterBottom;
