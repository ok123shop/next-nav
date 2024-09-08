'use client'
import Image from "next/image";
import { useEffect } from "react";


const topData = [
    {
        title: 'ok123',
        href: "https://ok123.shop",
        img: "https://oss.ok123.shop/ok123/logo/simp-logo.png"
    },
    {
        title: '银河',
        href: "https://nf.video/ZIJ92",
        img: "https://oss.ok123.shop/ok123/c703a0b1b64c475b8b50f5c90361dba5.png"
    },
    {
        title: '环球',
        href: "https://universalbus.cn/?s=NvQQrb6W4C",
        img: "https://oss.ok123.shop/ok123/91fd52a5211c40fd80750c2442cf61a7.png"
    }
]


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
        <div className="flex flex-col gap-2 p-2">
            <div className="flex gap-1 flex-col p-4 bg-gray-100 rounded-md">
                <h1 className="text-fuchsia-500 text-lg font-bold border-b pb-2 mb-2">流媒体合租，就选这三家</h1>
                <div className="flex flex-row gap-2 justify-between">
                    {
                        topData.map(item => (
                            <a key={item.title} className="cute2 flex flex-col items-center justify-center gap-1 flex-1" href={item.href}>
                                <Image src={item.img} width={35} height={35} alt={item.title}/>
                                <p className="text-sm text-red-500">{item.title}</p>
                            </a>
                        ))
                    }
                    


                </div>
                
            </div>
            <div className="flex gap-1 flex-col p-4 bg-gray-100 rounded-md">
                {
                    navList.map((item,index) => (
                        <div 
                            key={index} 
                            onClick={() => markHandler(item.text)}
                            className={`
                                text-sm
                                ${item.level == 1 ? ' text' : item.level == 2 ? 'pl-10  text-sm' : 'pl-16  text-sm'} 
                                hover:bg-blue-100 duration-100 rounded p-1 text-ellipsis overflow-hidden text-nowrap
                                cursor-pointer
                            `}
                        >
                            {item.text}
                        </div>
                    ))
                }
            </div>
        </div>
    ) 
}
