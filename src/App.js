import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PublicNoticesCard from "./components/PublicNoticesCard";
import { Run, getValue } from "./Startup";
import { filters } from "./Filters";

Run();

const GenerateEndDate = () => {
  var dateFormat = require("dateformat");

  const endDate = new Date().setMonth(new Date().getMonth() + 6);
  const endDateFormat = dateFormat(endDate, "mm/dd/yyyy");

  return endDateFormat;
};

function App(props) {
  return (
    <FilterList
      title="Baltimore County Public Notices"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PublicNoticesCard {...props} />}
      canSearchInFuture={true}
      customEndDate={GenerateEndDate()}
      includeInputFilter={true}
      includeDateFilter={true}
      includeClearButton={true}
      searchCategory="PublicNotices"
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
