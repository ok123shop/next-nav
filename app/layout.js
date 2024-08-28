import { Inter } from "next/font/google";
import "./globals.css";
import RootMenu from "@/components/RootMenu";
import RootHeader from "@/components/RootHeader";
import RootFooter from "@/components/RootFooter";
import MittMsg from "../components/MittMsg";
import MittBase from "../components/MittBase";

import openService from "@/service/openService";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "一一导航",
  description: "一一导航收藏了非常的实用站点，还有很多的技术分享",
};

async function getData(){
  return await openService.navRootList();
}

export default async function RootLayout({ children }) {
  let navRootList = await getData();
  return (
    <html lang="zh" className="w-full h-full p-0 m-0">
      <body className={`${inter.className} w-full h-full overflow-hidden `}>
          <RootMenu data={navRootList}/>
          <div className="flex flex-col flex-1 overflow-hidden  pl-0 lg:pl-64 w-full h-full">
            <RootHeader />
            <div className="p-4 w-full h-full flex-1  overflow-hidden overflow-y-auto scroll-smooth">
              {children}
              <RootFooter/>
            </div>
          </div>
          <MittMsg style={`z-index:9999`}/>
          <MittBase/>
      </body>
    </html>
  );
}
