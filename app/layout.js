import { Inter } from "next/font/google";
import "./globals.css";

import mitt from "@/_libs/mitt";
import NavMenu from "@/components/NavMenu";
import RootHeader from "@/components/RootHeader";

import MittMsg from "../components/MittMsg";
import MittBase from "../components/MittBase";
import openService from "@/service/openService";
import { ThemeProvider,useTheme } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "一一导航",
  description: "一一导航收藏了非常的实用站点，还有很多的技术分享",
};



export default async function RootLayout({ children }) {

  return (
    <html lang="zh" className="relative w-full h-full box-border" data-theme='light'>
      <body className={`${inter.className} w-full h-full box-border flex flex-col `}>
          <div className=" sticky top-0 left-0  w-full bg-base-100 h-20 z-50 shadow-lg px-4">
            <RootHeader />
          </div>
          <div className="h-full  overflow-hidden ">
            {
              children
            }
          </div>
          <MittMsg style={`z-index:9999`}/>
          <MittBase/>
      </body>
    </html>
  );
}
