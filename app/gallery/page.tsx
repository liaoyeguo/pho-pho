"use client";
import { ImageUpload } from "@/components/image-upload";
import { trpc } from "@/utils/trpc";
import {
  IllustrationNoContent,
  IllustrationNoContentDark,
} from "@douyinfe/semi-illustrations";
import { Button, Empty, Layout, Typography } from "@douyinfe/semi-ui";
import { useTranslations } from "next-intl";

const { Title } = Typography;

function Gallery() {
  const t = useTranslations("gallery");
  const a = trpc.hello.useQuery({ text: "haha" });
  console.log("============== a", a.data);
  return (
    <div className="h-screen bg-semi-color-bg-0">
      <Layout className="h-full">
        <Layout.Header className="bg-semi-color-bg-1 h-9 flex items-center">
          <div className="text-semi-color-primary font-semibold text-lg px-4">
            Pho Pho
          </div>
        </Layout.Header>
        <Layout.Content>
          <div className="h-full md:max-w-[720px] lg:max-w-[980px] mx-auto py-2">
            <div className="flex justify-between items-center">
              <Title heading={4} style={{ margin: "8px 0" }}>
                {t("page_title")}
              </Title>
              <ImageUpload />
            </div>
            <Empty
              className="mt-16"
              image={
                <IllustrationNoContent style={{ width: 150, height: 150 }} />
              }
              darkModeImage={
                <IllustrationNoContentDark
                  style={{ width: 150, height: 150 }}
                />
              }
              title={t("empty_title")}
              description={t("empty_desc")}
            />
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default trpc.withTRPC(Gallery);
