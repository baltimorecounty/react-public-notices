const recordsPerPage = {
  targetApiField: "recordsperpage",
  value: 10
};

const type = {
  targetApiField: "type",
  value: "Public Notice"
};

const filters = [
  {
    targetApiField: "category.value",
    displayName: "Department",
    options: [
      { value: "Aging", label: "Aging" },
      { value: "Board of Appeals", label: "Board of Appeals" },
      { value: "PDM_d1", label: "zoning hearings for district 1" },
      { value: "PDM_d2", label: "zoning hearings for district 2" },
      { value: "PDM_d3", label: "zoning hearings for district 3" },
      { value: "PDM_d4", label: "zoning hearings for district 4" },
      { value: "PDM_d5", label: "zoning hearings for district 5" },
      { value: "PDM_d6", label: "zoning hearings for district 6" },
      { value: "PDM_d7", label: "zoning hearings for district 7" },
      {
        value: "Economic and Workforce Development",
        label: "Economic and Workforce Development"
      },
      { value: "Business Events", label: "Business Events" },
      { value: "Job Seeker Events", label: "Job Seeker Events" },
      { value: "Environmental Protection", label: "Environmental Protection" },
      { value: "Ethics Commission", label: "Ethics Commission" },
      { value: "Fire Department", label: "Fire Department" },
      { value: "Health Department", label: "Health Department" },
      { value: "Holiday Closings", label: "Holiday Closings" },
      {
        value: "Human Relations Commission",
        label: "Human Relations Commission"
      },
      { value: "Liquor Board", label: "Liquor Board" },
      { value: "Local Management Board", label: "Local Management Board" },
      {
        value: "Personnel and Salary Advisory Board",
        label: "Personnel and Salary Advisory Board"
      },
      { value: "Police", label: "Police" },
      { value: "Procurement", label: "Procurement" },
      {
        value: "Professional Service Selection Committee",
        label: "Professional Service Selection Committee"
      },
      { value: "Recreationregion1", label: "recreation region 1" },
      { value: "Recreationregion2", label: "recreation region 2" },
      { value: "Recreationregion3", label: "recreation region 3" },
      { value: "Recreationregion4", label: "recreation region 4" },
      { value: "RecreationParksNatureare", label: "Nature" },
      { value: "recreationtherapeuticarea", label: "Therapeutic" },
      { value: "Tower Review Committee", label: "Tower Review Committee" }
    ]
  },

  {
    targetApiField: "recordsperpage",
    value: 10
  }
];

export { recordsPerPage, type, filters };