import { useTranslations } from "next-intl";

const ProfilePage = () => {
  const t = useTranslations("ProfilePage");
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
    </div>
  );
};

export default ProfilePage;
