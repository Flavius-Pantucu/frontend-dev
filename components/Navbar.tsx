"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const checked = locale == "en" ? false : true;

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLocale = e.target.checked ? "ro" : "en";
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    <div className="w-full flex justify-between border-b py-4 ">
      <div className="flex gap-4 items-center text-lg z-20">
        <Link href={`/${locale}/`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/about/profile`}>{t("profile")}</Link>
      </div>

      <label className="inline-flex items-center cursor-pointer z-20">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => handleLanguageChange(e)}
        />
        <div className="relative w-16 h-8 rounded-full bg-slate-700 peer-checked:bg-slate-600 peer-checked:after:translate-x-full after:content-['en'] peer-checked:after:content-['ro'] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-7 after:transition-all after:text-slate-700 after:text-center after:text-sm after:leading-6 after:font-semibold after:font-mono"></div>
        <span className="ms-3 text-sm font-mono text-slate-200 font-semibold">
          {t("switchLanguage")}
        </span>
      </label>
    </div>
  );
};

export default Navbar;
