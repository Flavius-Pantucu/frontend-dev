import { getTranslations } from "next-intl/server";
import React from "react";

const JokePage = async () => {
  const t = await getTranslations("JokePage");
  const data = await fetch(`https://official-joke-api.appspot.com/random_joke`);
  const joke = await data.json();

  return (
    <div className="flex w-full items-center justify-center flex-col gap-y-20">
      <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
      <div className="flex flex-col min-h-[256px] w-[768px] bg-[#ADD8E6]/90 rounded-lg z-20 px-5">
        <div className="flex justify-center text-3xl text-slate-800 mt-5 font-extrabold font-mono">
          {joke.type.charAt(0).toUpperCase() + joke.type.slice(1)}
        </div>
        <div className="flex justify-start text-2xl text-slate-800 mt-10 font-bold font-mono">
          {joke.setup}
        </div>
        <div className="flex justify-end text-2xl text-slate-800 mt-10 font-bold font-mono">
          {joke.punchline}
        </div>
      </div>
    </div>
  );
};

export default JokePage;
