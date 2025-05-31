"use-client";
import { uploadFile } from "@/utils/supabase/storage";
import { IconUpload } from "@douyinfe/semi-icons";
import { Upload, Button } from "@douyinfe/semi-ui";
import type { customRequestArgs } from "@douyinfe/semi-ui/lib/es/upload/interface";
import { useTranslations } from "next-intl";

export const ImageUpload = () => {
  const t = useTranslations("image-upload");

  const uploadImage = async (object: customRequestArgs) => {
    const url = await uploadFile(object.fileInstance, { contentType: object.fileInstance.type })
  };

  return (
    <Upload
      action="https://api.semi.design/upload"
      accept="image/*"
      customRequest={uploadImage}
    >
      <Button icon={<IconUpload />} theme="light">
        {t("add_photo_btn")}
      </Button>
    </Upload>
  );
};
