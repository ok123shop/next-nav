'use client'
import Image from "next/image";
import { useEffect } from "react";


export default function BlogDetailMenu({navList}) {
    navList = navList || [];

    function markHandler(sectionId) {
        const element = document.getElementById(`bd_${sectionId}`);
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
        <div className="flex gap-1 flex-col p-4 ">
            {
                navList.map((item,index) => (
                    <div 
                        key={index} 
                        onClick={() => markHandler(item.text)}
                        className={`
                            ${item.level == 1 ? ' text' : item.level == 2 ? 'pl-4  text-md' : 'pl-8  text-sm'} 
                            hover:bg-blue-100 duration-100 rounded p-2 text-ellipsis overflow-hidden text-nowrap
                            cursor-pointer
                        `}
                    >
                        {item.text}
                    </div>
                ))
            }
        </div>
    ) 
}
