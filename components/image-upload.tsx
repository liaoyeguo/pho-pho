"use-client";
import { uploadFile } from "@/utils/supabase/storage";
import { IconUpload } from "@douyinfe/semi-icons";
import { Upload, Button } from "@douyinfe/semi-ui";
import type { customRequestArgs, FileItem } from "@douyinfe/semi-ui/lib/es/upload/interface";
import { useTranslations } from "next-intl";
import { useState } from "react";
import cn from "classnames"

export const ImageUpload = (props: { onSuccess: (res: { url: string }, file: File) => void }) => {
  const t = useTranslations("image-upload");
  const [list, updateList] = useState<FileItem[]>([]);

  const uploadImage = async (object: customRequestArgs) => {
    const url = await uploadFile(object.fileInstance, { contentType: object.fileInstance.type })
    object.onSuccess({ url });
  };

  const loading = list.some((item) => item.status === "uploading");
  const isError = list.some((item) => item.status === "uploadFail");

  return (
    <Upload
      fileList={list}
      onChange={({ fileList }) => updateList([...fileList])}
      showUploadList={false}
      accept="image/*"
      customRequest={uploadImage}
      onSuccess={props.onSuccess}
    >
      <Button icon={<IconUpload className={cn({ "text-semi-color-danger": isError })} />} theme="light" loading={loading}>
        {t("add_photo_btn")}
      </Button>
    </Upload>
  );
};
