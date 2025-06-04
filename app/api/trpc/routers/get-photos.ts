import { db } from "@/db/client";
import { photosTable } from "@/db/schema";
import z from "zod";
import { procedure } from "../init";
import { count } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";

const getPhotosReqSchema = z.object({
	page: z.number(),
	pageSize: z.number(),
});

export type GetPhotosReq = z.infer<typeof getPhotosReqSchema>;

const getPhotos = async (req: GetPhotosReq) => {
	const res = await Promise.all([db.query.photosTable.findMany({ limit: req.pageSize, offset: Math.max(1, req.page - 1) }), db.select({ count: count() }).from(photosTable)])
	const supabase = await createClient()
	return {
		list: await Promise.all(res[0].map(async (item) => {
			return {
				...item,
				url: (await supabase.storage.from("photos").createSignedUrl(item.url!, 60 * 60 * 24))?.data?.signedUrl
			}
		})),
		total: res[1][0].count
	}
};

export const getPhotosProcedure = procedure
	.input(getPhotosReqSchema)
	.query(async ({ input }) => {
		const photos = await getPhotos(input);
		return photos;
	});