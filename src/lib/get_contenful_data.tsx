import { createClient } from "contentful";

export default async function getContentfulData(model_type: string) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  });

  const res = await client.getEntries({
    content_type: model_type,
  });

  return res.items;
}
