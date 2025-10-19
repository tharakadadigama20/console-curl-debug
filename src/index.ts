import { buildCurlCommand, CurlOptions } from "./utils/buildCurl";

export const consoleCurlUrl = (options: CurlOptions): void => {
  const curlCommand = buildCurlCommand(options);

  console.error("----------------- Debug cURL command -----------------");
  console.error(curlCommand);
  console.error("------------------------------------------------------");
};

export { buildCurlCommand };