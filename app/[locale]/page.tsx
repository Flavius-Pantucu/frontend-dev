import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-10 opacity-50">
        <Image
          src={"https://picsum.photos/id/77/3840/2160"}
          fill={true}
          alt={""}
        />
      </div>
      <div className="flex w-full items-center justify-center flex-col gap-y-48">
        <div className="text-3xl font-bold mt-20 z-20 text-center bg-slate-800/30 rounded-lg p-4">
          {t("title")}
        </div>
        <div className="text-3xl font-bold mt-20 z-20 text-center bg-slate-800/30 rounded-lg p-4">
          {t("description")}
        </div>
      </div>
    </>
  );
}
