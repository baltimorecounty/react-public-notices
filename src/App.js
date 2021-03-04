import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { FilterList } from "@baltimorecounty/react-filter-list";
import PublicNoticesCard from "./components/PublicNoticesCard";
//import { Run, getValue, filters } from "./Startup";
import PastMeetingEventsPage from "./components/PastMeetingEventspage";
import { Run, getValue } from "./Startup";

Run();

function App(props) {
  // return <PastMeetingEventsPage />;
  return (
    <FilterList
      title="Baltimore County Police Newsroom"
      // filters={filters}
      apiEndpoint={getValue("apiRoot")}
     // renderItem={props => <PublicNoticesCard {...props} />}
      renderItem={props => <PastMeetingEventsPage />}
      includeInputFilter={true}
      includeDateFilter={true}
      includeClearButton={true}
      searchCategory="none "
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
