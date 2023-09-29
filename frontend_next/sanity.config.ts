import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  title: "My portfolio",

  projectId: "00ieg9d1",
  dataset: "production",

  apiVersion: "2023-9-28",

  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
