import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";
import { ConvertSETags } from "../utilities/ConvertSETags";
import ReactHtmlParser from "react-html-parser";

const PastMERows = props => {
  const { data } = props;

  const recordsToDisplay = data.filter(
    ({ name }) => name !== "Baltimore County Government"
  );

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return recordsToDisplay.map((item, i) => (
    <TableRow key={`tr-${i}`}>
      <TableCell key={`tdInfo-${i}`}>
        {new Intl.DateTimeFormat("en-US", options).format(
          new Date(item.startDate)
        )}
      </TableCell>
      <TableCell key={`tdStatus-${i}`}>
        <a href={item.url}>{item.name} </a>
      </TableCell>
      <TableCell key={`tdURL-${i}`}>
        {ReactHtmlParser(ConvertSETags(item.description))}
      </TableCell>
    </TableRow>
  ));
};

export default PastMERows;
