import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTokenZeroSvg } from "services/azureApi/fetches";
import sharp from "sharp";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const svg = await fetchTokenZeroSvg(req.query.projectSlug as string);

    const buffer = await sharp(Buffer.from(svg))
      .toFormat("png")
      .resize({ height: 1920, width: 1080 })
      .toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } catch (error) {
    res.status(500).send("Error converting SVG to PNG");
  }
};
