import { createClient } from "./client";

export const uploadFile = async (
    file: Blob,
    options: { contentType?: string }
) => {
    const folderName = new Date().toISOString().split("T")[0];
    const fileName = window.crypto.randomUUID();

    let filePath = `${folderName}/${fileName}`;
    const ext = options.contentType?.split("/")?.[1];
    if (ext) filePath = filePath + "." + ext;

    const supabase = createClient()
    const bucket = supabase.storage.from("photos");
    const { error } = await bucket.upload(
        filePath,
        file,
        options
    );

    if (error) throw error;
    return filePath
};
