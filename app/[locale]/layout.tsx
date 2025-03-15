import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="absolute top-0 left-0 w-full h-full z-10 opacity-50">
            <Image
              src={"https://picsum.photos/id/77/3840/2160"}
              fill={true}
              alt={""}
            />
          </div>
          <div className="mx-auto max-w-4xl h-screen">
            <Navbar locale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
