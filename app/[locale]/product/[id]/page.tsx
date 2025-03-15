import Product from "@/components/Product";
import { getTranslations } from "next-intl/server";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations("ProductPage");

  return (
    <div className="flex flex-col gap-y-20 w-full items-center justify-center">
      <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
      <Product productId={id} />
    </div>
  );
}

export default ProductPage;
