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
      { value: "releases", label: "Department - one" },
      { value: "stories", label: "Department - two" }
    ]
  },
  {
    targetApiField: "recordsperpage",
    value: 10
  }
];

export { recordsPerPage, type, filters };
