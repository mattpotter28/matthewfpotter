import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/sidebar";
import Navigation from "@/components/Navigation";

const inter = localFont({
  src: [
    {
      path: "../fonts/inter/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/inter/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Matthew Potter - Software Engineer",
  description:
    "Matthew Potter is a software engineer in Austin, Texas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <link rel="icon" href="@/../public/favicon.ico" type="image/x-icon"></link>
      <body className="bg-gray-100 text-sm antialiased">
        <div className="mx-auto my-4 max-w-xl px-4 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Sidebar />
            <div className="space-y-4 lg:col-span-2">
              <Navigation />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
