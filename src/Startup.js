import { Config } from "@baltimorecounty/javascript-utilities";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
const { setConfig, getValue } = Config;

const apiPath = `api/hub/structuredContent/Events`;
const testApiRoot = `https://testservices.baltimorecountymd.gov/${apiPath}`;
const prodApiRoot = `https://services.baltimorecountymd.gov/${apiPath}`;

/**
 * Run Startup Code
 */
const Run = () => {
  // HACK - the Config utility does not account for beta.
  // TODO: This will need to be addressed when we get closer to launch
  const localApiRoot =
    window.location.hostname.indexOf("beta") > -1
      ? testApiRoot
      : `//localhost:54727/${apiPath}`;

  const configValues = {
    local: {
      apiRoot: localApiRoot
    },
    development: {
      apiRoot: testApiRoot
    },
    staging: {
      apiRoot: testApiRoot
    },
    production: {
      apiRoot: prodApiRoot
    }
  };

  setConfig(configValues);
};

export { Run, getValue };
