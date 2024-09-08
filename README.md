# Google Apps Script API integrations.

Integrated APIs:
 - Wildberries seller API (incomplete)

### Installation
```
npm install gas-api-integrations --save-dev
```

Also you must configure `clasp` for TypeScript ([see in official docs](https://github.com/google/clasp/blob/master/docs/typescript.md)) and esmodules ([see in official docs](https://github.com/google/clasp/blob/master/docs/esmodules.md))

### Usage

Import classes you need:

```TypeScript
import { Wildberries } from "gas-api-integrations";
```

Create instance:

```TypeScript
const wb = new Wildberries('your_jwt');
```

Use methods of API (e.g. "https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail"):

```TypeScript
const responce = wb.analytics.api.v2.nmReport.detail.post(payload)
```

