import createImageUrlBuilder from "@sanity/image-url";
import {createClient} from "next-sanity"
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r6br8pn7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ||'production',
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_API_TOKEN, // or leave blank for unauthenticated usage
  useCdn: process.env.NODE_ENV, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
