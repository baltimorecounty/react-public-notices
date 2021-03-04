import {
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";

//import PublicNoticesThumbnail from "./PublicNoticesThumbnail";
import React from "react";

const PublicNoticeCard = (props) => {
  const { startDate, name, location, thumbnail, thumbnailAltText, url } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const noticeDate = new Date(startDate).toLocaleDateString("en-US", options);

  return (
    <Card className="text-left">
      <h2>
        <a href={url}>{name}</a>
      </h2>
      <CardContent>
        <div className="row">
          <div className="col-sm-3 col-xs-12 text-center">
            {/* <PublicNoticesThumbnail
              thumbnail={thumbnail}
              thumbnailAltText={thumbnailAltText}
            /> */}
          </div>
          <div className="col-sm-9 col-xs-12">
            <p>{noticeDate}</p>
            <p>{location}</p>
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
