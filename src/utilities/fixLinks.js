import useEventsFileUrl from "../hooks/useEventsFileUrl";

const FixLinks = (description) => {
  var element = document.createElement("div");

  element.innerHTML = description;

  var links = element.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("objectid") != null) {
      var newLinks = links[i].cloneNode();

      var url = GetLinkUrl(links[i].getAttribute("objectid"));

      newLinks.href = url;
      console.log(description.replace(/[\t\n\r]/gm, ""));
      console.log(links[i].outerHTML);
      description = description.replace(links[i].outerHTML, newLinks.outerHTML);
    }
  }

  return description;
};

const GetLinkUrl = (objectId) => {
  const [{ eventFileUrl }] = useEventsFileUrl(objectId);
  const { records } = eventFileUrl;

  if (records) {
    return records[0].url;
  } else {
    return null;
  }
};

export { FixLinks };
