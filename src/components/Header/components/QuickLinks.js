import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickLinks = () => (
    <div className="d-flex left-section align-items-center">
        <FontAwesomeIcon className="mr-2" icon={["fas", "bars"]} />
        <h4 className="upper-item quick-links">
            Quick Links
        </h4>
        <FontAwesomeIcon className="ml-2" icon={["fas", "question-circle"]} />
        <h4 className="upper-item ml-2">
            FAQ
        </h4>
    </div>
);

export default QuickLinks;
