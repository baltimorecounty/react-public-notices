import {
  Button,
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

import PublicNoticesThumbnail from "./PublicNoticesThumbnail";
import React from "react";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from "react-html-parser";

const PublicNoticeCard = props => {
  const {
    startDate,
    endDate,
    name,
    location,
    description,
    thumbnail,
    thumbnailAltText,
    url
  } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const noticeDate = new Date(startDate).toLocaleDateString("en-US", options);
  const startTime = new Date(startDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  const endTime = new Date(endDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  var showDescription = ReactHtmlParser(`${description}`);

  return (
    <Card className="text-left">
      <h2>
        <a href={url}>{name}</a>
      </h2>
      <CardContent>
        <div className="row">
          {/* <div className="col-sm-3 col-xs-12 text-center"> 
           <PublicNoticesThumbnail
              thumbnail={thumbnail}
              thumbnailAltText={thumbnailAltText}
            /> 
           </div>  */}

          <div className="">
            <p>
              <span>
                {" "}
                <FontAwesomeIcon icon={["fa", "calendar"]} />
                &nbsp;&nbsp;
              </span>
              {noticeDate}&nbsp;&nbsp;
              <span>
                {" "}
                <FontAwesomeIcon icon={["fa", "clock"]} />
                &nbsp;&nbsp;{startTime}
              </span>
              &nbsp;&nbsp;
              <span>- {endTime}</span>
            </p>
            <p>{location}</p>
            <p>{showDescription} </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Button as="a" text="Details" href={url} />
      </CardFooter>
    </Card>
  );
};

export default PublicNoticeCard;
