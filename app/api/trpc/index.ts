import { router } from "./init";
import { addPhotoProcedure } from "./routers/add-photo";
import { getPhotosProcedure } from "./routers/get-photos";

export const appRouter = router({
  addPhoto: addPhotoProcedure,
  getPhotos: getPhotosProcedure
});

export type AppRouter = typeof appRouter;
