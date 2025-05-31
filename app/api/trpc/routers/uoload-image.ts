import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { procedure } from "../init";

const uoloadImageReqSchema = z.object({
  file,
});

type UoloadImageReq = z.infer<typeof uoloadImageReqSchema>;

export const uoloadImage = async (req: UoloadImageReq) => {
  const supabase = await createClient();
  supabase.storage.from("").upload();
};

export const uploadImageProcedure = procedure
  .input(uoloadImageReqSchema)
  .query((opt) => uoloadImage(opt.input));
