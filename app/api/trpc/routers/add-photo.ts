import { z } from "zod";
import { procedure } from "../init";
import { db } from "@/db/client";
import { photosTable } from "@/db/schema";

const addImageReqSchema = z.object({
  url: z.string(),
  name: z.string(),
});

type UoloadImageReq = z.infer<typeof addImageReqSchema>;

export const addPhoto = async (req: UoloadImageReq) => {
  await db.insert(photosTable).values({
    url: req.url,
    name: req.name,
  })
};

export const addPhotoProcedure = procedure
  .input(addImageReqSchema)
  .mutation((opt) => addPhoto(opt.input));
