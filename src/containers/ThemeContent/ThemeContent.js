import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggler from "../../components/Toggler";
import Forum from "../Forum";
import CreateEntityModal from "../../components/CreateEntityModal";


const ThemeContent = ({ themeTitle, themes, openModal, forumId, forumTitle, topics, match, searchTopicByName }) => (
  <div className="themes-container">
    <h2>
      {forumTitle && forumTitle}
    </h2>
    <div className="d-flex mb-3 align-items-center justify-content-between">
      <div>
        <button
          onClick={() => openModal(<CreateEntityModal title="Topic" forumId={forumId} themeModal={true} />, 500)}
          className="themes-container--new-topic mr-3"
        >
              New Topic
          <FontAwesomeIcon className="ml-2" icon={["fas", "pencil-alt"]} />
        </button>
        <input
          onChange={e => searchTopicByName(e.target.value)}
          className="themes-container--search"
          placeholder="Search topics by name"
          type="text"
        />
      </div>
      <div>
        <p className="font-weight-bolder">{topics && topics.length} Topics  Page 1 of 1</p>
      </div>
    </div>
    <Accordion className="mb-3" defaultActiveKey="0">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center mb-0">
          <h5 className="m-0 title flex-grow-3 themes-container--title font-weight-bold">
            Topics
          </h5>
          <div className="d-flex align-items-center flex-grow-1 justify-content-between">
            <div className="d-flex">
              <p className="m-0">
                <FontAwesomeIcon className="mr-2" icon={["fas", "scroll"]} />
              </p>
              <p className="m-0 mr-5 ml-5">
                <FontAwesomeIcon className="ml-2 mr-2" icon={["fas", "comments"]} />
              </p>
              <p className="m-0">
                <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
              </p>
            </div>
          </div>
          <Accordion.Toggle as={Toggler} variant="link" eventKey="0"/>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body back-speed={100}>
            {
              topics && topics.map((item, index) => (
                <Forum
                  match={match}
                  themes={true}
                  item={item} id={index}
                  className={index === 9 && "mb-0"}
                  key={index}
                />
              ))
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </div>
);

export default ThemeContent;
