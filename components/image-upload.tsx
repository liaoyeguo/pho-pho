"use-client";
import { IconUpload } from "@douyinfe/semi-icons";
import { Upload, Button } from "@douyinfe/semi-ui";
import type { customRequestArgs } from "@douyinfe/semi-ui/lib/es/upload/interface";
import { useTranslations } from "next-intl";

export const ImageUpload = () => {
  const t = useTranslations("image-upload");

  const uploadImage = (object: customRequestArgs) => {};

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
