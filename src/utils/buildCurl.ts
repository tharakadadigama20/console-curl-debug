export interface CurlOptions {
  method: string;
  url: string;
  token?: string;
  requestBody?: any;
  headers?: Record<string, string>;
}

export const buildCurlCommand = ({
  method,
  url,
  token,
  requestBody,
  headers = {},
}: CurlOptions): string => {
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { Authorization: token } : {}),
    ...headers,
  };

  const headerString = Object.entries(defaultHeaders)
    .map(([key, value]) => `-H '${key}: ${value}'`)
    .join(" \\\n    ");

  const dataPart = requestBody
    ? ` \\\n    -d '${JSON.stringify(requestBody).replace(/'/g, "'\\''")}'`
    : "";

  return `curl -X ${method.toUpperCase()} '${url}' \\\n    ${headerString}${dataPart}`;
};
