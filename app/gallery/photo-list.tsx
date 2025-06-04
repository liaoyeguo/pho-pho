"use client"
import { useQuery } from "@tanstack/react-query";
import {
  IllustrationNoContent,
  IllustrationNoContentDark,
} from "@douyinfe/semi-illustrations";
import { Empty, List, Image, Spin } from "@douyinfe/semi-ui";
import { useTranslations } from "next-intl";
import { useTRPC } from "@/utils/trpc";
import { IconSpin } from "@douyinfe/semi-icons";
import classNames from "classnames";
import Link from "next/link";

export const PhotoList = (props: { className?: string }) => {
  const t = useTranslations("gallery");
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(trpc.getPhotos.queryOptions({ page: 1, pageSize: 100 }))


  if (isLoading)
    return <div className="w-full h-full flex justify-center relative top-[20%]">
      <Spin size="large" spinning indicator={<IconSpin />} />
    </div>

  if (!data?.list.length) return <Empty
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

  return <div className={classNames(props.className)}>
    <List grid={{
      gutter: 24,
      span: 6,
    }}
      dataSource={data.list}
      renderItem={item => (
        <List.Item >
          <Link href={`/photo?id=${item.id}`}>
            <Image src={item.url} preview={false} height={240} imgCls="relative top-[50%] -translate-y-[50%]" />
            <h3
              className="text-semi-color-text-0 mt-1 mb-4"
            >{item.name}</h3>
          </Link>
        </List.Item>
      )}
    />
  </div>
}