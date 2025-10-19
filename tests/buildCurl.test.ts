import assert from "assert";
import { buildCurlCommand } from "../src/utils/buildCurl";

const curl = buildCurlCommand({
  method: "POST",
  url: "https://api.example.com/v1/user",
  token: "Bearer test-token",
  requestBody: { name: "John" },
});

assert.ok(curl.includes("curl -X POST"));
assert.ok(curl.includes("Authorization: Bearer test-token"));
assert.ok(curl.includes("-d '{\"name\":\"John\"}'"));

console.log("✅ buildCurlCommand works as expected");
