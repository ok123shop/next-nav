'use client'
import mitt from "@/_libs/mitt"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MenuData from "@/data/menu"
const menuList = MenuData();

export default function RootHeader({onThemeChage}) {

  function onMenuShop(){
    mitt.emit("onMenuShopHandler")
  }
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function setThemeHandler(theme){
    if(onThemeChage && typeof onThemeChage === 'function'){
      onThemeChage(theme);
    }
    setTheme(theme);
  }
  
  // 确保客户端渲染
  useEffect(() => setThemeHandler("light"), []);


  return (
    <div className="w-full h-full flex items-center">
        <div className="navbar bg-base-100">
          <div>
            <a className="btn btn-ghost text-xl" href="/">一一导航</a>
          </div>
          
          <div className="flex-1 text-right justify-end">
            <div></div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                {
                  menuList.map(menu => (
                    <li className="hidden lg:inline-block" key={menu.id}><a href={menu.href}>{menu.label}</a></li>
                  ))
                }
                <li className="inline-block lg:hidden">
                  <details>
                    <summary>更多菜单</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      {
                        menuList.map(menu => (
                          <li  key={menu.id}><a href={menu.href}>{menu.label}</a></li>
                        ))
                      }
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
