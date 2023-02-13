// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from "../../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
type Data = {
  workers: Worker[];
};

const workerQuery = groq`*[_type=="about"]{
    _id,
    ...
  } `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const workers: Worker[] = await sanityClient.fetch(workerQuery);
  res.status(200).json({ workers });
}
