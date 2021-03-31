import useEventsFileUrl from "../hooks/useEventsFileUrl";

const FixLinks = (description) => {
  var element = document.createElement("div");

  element.innerHTML = description;

  var links = element.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("objectid") != null) {
      var newLinks = links[i].cloneNode();

      var record = GetLinkUrl(links[i].getAttribute("objectid"));

      newLinks.href = record;

      description = description.replace(links[i].outerHTML, newLinks.outerHTML);
    }
  }

  return description;
};

const GetLinkUrl = (objectId) => {
  const [{ eventFileUrl }] = useEventsFileUrl(objectId);
  const { records } = eventFileUrl;
  const [{ id, url }] = records;

  //const { id, url } = records;
  console.log(records);

  return eventFileUrl;
};

export { FixLinks };
