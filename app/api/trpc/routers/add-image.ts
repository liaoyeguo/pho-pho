import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { procedure } from "../init";

const addImageReqSchema = z.object({
  url: z.string(),
  title: z.string(),
});

type UoloadImageReq = z.infer<typeof addImageReqSchema>;

export const addImage = async (req: UoloadImageReq) => {
};

export const uploadImageProcedure = procedure
  .input(addImageReqSchema)
  .query((opt) => addImage(opt.input));
