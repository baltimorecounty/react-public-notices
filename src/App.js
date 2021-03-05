import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PublicNoticesCard from "./components/PublicNoticesCard";
import { Run, getValue } from "./Startup";
import { filters } from "./Filters";

Run();

function App(props) {
  return (
    <FilterList
      title="Baltimore County Police Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={props => <PublicNoticesCard {...props} />}
      includeInputFilter={true}
      includeDateFilter={true}
      includeClearButton={true}
      searchCategory="none "
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
