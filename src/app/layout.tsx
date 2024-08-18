import Head from "next/head";
import "./styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Risni Dheerasekara</title>
        <link rel="icon" href="/image.jpg" />
      </Head> */}
      <body>{children}</body>
    </html>
  );
}
