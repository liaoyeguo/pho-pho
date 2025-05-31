import { z } from "zod";
import { procedure, router } from "../init";
import { uploadImageProcedure } from "./add-image";

export const appRouter = router({
  uploadImage: uploadImageProcedure,
});

export type AppRouter = typeof appRouter;
