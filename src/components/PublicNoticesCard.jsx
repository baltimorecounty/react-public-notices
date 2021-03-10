import {
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";
import { ConvertSETags } from "../utilities/ConvertSETags";
import PublicNoticesThumbnail from "./PublicNoticesThumbnail";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from "react-html-parser";

const PublicNoticeCard = (props) => {
  const {
    startDate,
    endDate,
    name,
    location,
    description,
    thumbnail,
    thumbnailAltText,
    url,
  } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const noticeDate = new Date(startDate).toLocaleDateString("en-US", options);
  const startTime = new Date(startDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const endTime = new Date(endDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
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

          <div className="col-sm-12 col-xs-12">
            <p>
              <span>
                {" "}
                <FontAwesomeIcon icon={["fa", "calendar"]} />
                <i> {noticeDate}</i> <FontAwesomeIcon icon={["fa", "clock"]} />
                <i> {startTime} </i>- <i>{endTime} </i>
              </span>
            </p>
            <p>{location}</p>
            {ConvertSETags(showDescription)}
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
