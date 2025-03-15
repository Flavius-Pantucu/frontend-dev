import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex w-full items-center justify-center flex-col gap-y-48">
      <div className="text-3xl font-bold mt-20 z-20 text-center">
        {t("title")}
      </div>
      <div className="text-3xl font-bold mt-20 z-20 text-center">
        {t("description")}
      </div>
    </div>
  );
}
