'use client'
import Image from "next/image";
import mitt from "@/_libs/mitt"
import { Milonga } from "next/font/google";
import { useEffect,useState } from "react";


export default function RootMenu({data}) {
  let [show,setShow] = useState(false);

  function onMenuShopHandler(){
    setShow(true)
    let mark = document.createElement('div')
    mark.className="z-10 fixed w-full h-full left-0 top-0 bg-zinc-800 bg-opacity-20";
    mark.addEventListener("click", function() {
      mark.remove()
      setShow(false)
    });
    document.body.appendChild(mark);
  }

  useEffect(() => {
      mitt.on("onMenuShopHandler", onMenuShopHandler);
        // 清理事件监听器以避免内存泄漏
        return () => {
          mitt.off("onMenuShopHandler");
        };
  },[])

  return (
    <div 
      className={`z-50 h-full absolute -left-64 lg:left-0 top-0 w-64 shadow ${show ? 'left-0' : null} bg-base-200 `} style={
      { 
        transitionDuration: '.2s' 
      }
    }>

      <div className="h-full overflow-hidden flex flex-col w-64  z-50">
        <div className="flex flex-col justify-center items-center py-6 gap-4">
          <Image src={'https://oss.ok123.shop/ok123/avatar/38.png'} width={150} height={150} alt="logo" className="rounded-full overflow-hidden"/>
          <div className="text-xl font-bold">
            一一导航
          </div>
        </div>
        <div className="w-full h-full overflow-hidden overflow-y-auto flex-1 flex flex-col items-center gap-4">

          <ul className="w-full menu-lg menu bg-base-200 rounded-box">
            {
              data.map(item => (
                <li key={item.id}>
                  <a href={`/#${item.id}`}>
                    <Image src={item.icon || 'https://oss.ok123.shop/ok123/avatar/38.png'} width={30} height={30} alt="logo" className="rounded-full overflow-hidden"/>
                    {item.title}
                  </a>
                </li>
              ))
            }
            
          </ul>
        

        </div>
      </div>

    </div>
  );
}
