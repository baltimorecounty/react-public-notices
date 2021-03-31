import { useEffect, useState } from "react";
import { GetEventFileUrl } from "../services/ApiService";

const useEventsFileUrl = (objectid) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [eventFileUrl, setEventFileUrl] = useState([]);

  useEffect(() => {
    GetEventFileUrl(objectid)
      .then((response) => {
        setEventFileUrl(response);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [objectid]);
  return [
    {
      eventFileUrl,
      hasError,
      isLoading,
    },
  ];
};

export default useEventsFileUrl;
