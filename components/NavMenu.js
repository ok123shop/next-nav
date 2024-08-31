'use client'
import Image from "next/image";
import mitt from "@/_libs/mitt"
import { Milonga } from "next/font/google";
import { useEffect,useState } from "react";


export default function RootMenu({data}) {

  function markHandler(event, sectionId) {
    event.preventDefault();
    
    const element = document.getElementById(`link_${sectionId}`);
    const container = document.getElementById('menucontent-warp');
    const offset = 50; // 距离顶部 50px
  
    if (element && container) {
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const elementPosition = elementRect.top - containerRect.top;
      
      // 计算滚动位置并减去偏移量
      const offsetPosition = elementPosition + container.scrollTop - offset;
  
  
      container.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // 平滑滚动
      });
    }
  }

  return (
      <div className="h-full overflow-hidden flex flex-col z-50  w-full">
        <div className="flex flex-col justify-center items-center py-6 gap-4">
          <Image src='https://oss.ok123.shop/ok123/avatar/38.png' width={150} height={150} alt="logo" className="rounded-full overflow-hidden h-auto"
          priority={true} // 添加 priority 属性
          />
          <div className="text-xl font-bold">
            一一导航
          </div>
        </div>
        <div className="w-full h-full overflow-hidden overflow-y-auto flex-1 flex flex-col items-center gap-4">

          <ul className="w-full menu-lg menu bg-base-200 rounded-box">
            {
              data.map(item => (
                <li key={item.id}>
                  <div onClick={(e) => markHandler(e,item.id)}>
                    <Image src={item.icon || 'https://oss.ok123.shop/ok123/avatar/38.png'} width={30} height={30} alt="logo" className="rounded-full overflow-hidden"/>
                    {item.title}
                  </div>
                </li>
              ))
            }
            
          </ul>
        </div>
      </div>

  );
}
