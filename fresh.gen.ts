// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $api_listen from "./routes/api/listen.ts";
import * as $api_update from "./routes/api/update.ts";
import * as $ctrl from "./routes/ctrl.tsx";
import * as $index from "./routes/index.tsx";
import * as $Control from "./islands/Control.tsx";
import * as $Synth from "./islands/Synth.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/api/listen.ts": $api_listen,
    "./routes/api/update.ts": $api_update,
    "./routes/ctrl.tsx": $ctrl,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Control.tsx": $Control,
    "./islands/Synth.tsx": $Synth,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
