import { SanityClient } from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
