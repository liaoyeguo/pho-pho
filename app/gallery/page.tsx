"use client";
import { ImageUpload } from "@/components/image-upload";
import { Layout, Toast, Typography } from "@douyinfe/semi-ui";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
import { PhotoList } from "./photo-list";
import { useTRPC } from "@/utils/trpc";

const { Title } = Typography;

function Gallery() {
  const t = useTranslations("gallery");
  const trpc = useTRPC();
  const { mutateAsync } = useMutation(trpc.addPhoto.mutationOptions())

  const handlelAddImage = async ({ url }: { url: string }, file: File) => {
    await mutateAsync({ url, name: file.name })
    Toast.success(t("add_photo_success"))
  };

  return (
    <div className="h-screen bg-semi-color-bg-0">
      <Layout className="h-full">
        <Layout.Header className="bg-semi-color-bg-1 h-9 flex items-center">
          <div className="text-semi-color-primary font-semibold text-lg px-4">
            Pho Pho
          </div>
        </Layout.Header>
        <Layout.Content className="overflow-auto">
          <div className="md:max-w-[720px] lg:max-w-[980px] mx-auto py-2">
            <div className="flex justify-between items-center">
              <Title heading={4} style={{ margin: "8px 0" }}>
                {t("page_title")}
              </Title>
              <ImageUpload onSuccess={handlelAddImage} />
            </div>
            <PhotoList className="mt-4" />
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default Gallery;
