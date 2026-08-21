import "./globals.css";
import PageNavigator from "@/components/PageNavigator";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <PageNavigator />
      </body>
    </html>
  );
}