# console-curl

A tiny helper to print the equivalent cURL command for any HTTP request — useful for debugging microservice calls.
URL: https://www.npmjs.com/package/console-curl-debug

## Installation
```bash
npm i console-curl-debug
```

## Usage

```js
import { consoleCurlUrl } from "console-curl";

consoleCurlUrl({
  method: "POST",
  url: "https://api.example.com/v1/user",
  token: "Bearer my-token",
  requestBody: { name: "John Doe" },
});
```

## Output:

```
----------------- Debug cURL command -----------------
curl -X POST 'https://api.example.com/v1/user' \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer my-token' \
    -d '{"name":"John Doe"}'
------------------------------------------------------
```

## License

MIT © Tharaka
