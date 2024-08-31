"use client"
import RootFooter from "@/components/RootFooter";
import { useEffect,useState } from "react";

export default function MenuLayout({menu,children,maxContent}){
    const [show,setShow] = useState(false);
    function onMenuShopHandler(){
        let mark = document.createElement('div')
        mark.className="z-10 fixed w-full h-full left-0 top-0 bg-zinc-800 bg-opacity-20";
        mark.addEventListener("click", function() {
        setShow(false)
        mark.remove()
        });
        document.body.appendChild(mark);
        setShow(true)
    }

    
    return (
        <main className="relative w-full h-full container mx-auto">
            <>
                <div className="flex lg:hidden shadow py-2 bg-base-100 ">
                    <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={onMenuShopHandler}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>

                <div className={`${show ? 'flex' : 'hidden'} z-20 bg-base-100 lg:flex w-64 shadow  absolute left-0 top-0 h-full`}>
                    <div className="h-full overflow-hidden flex flex-col z-50  w-full">
                        {menu}
                    </div>
                </div>
            </>
            <div id="menucontent-warp" 
                className={
                    `
                        pt-4 flex flex-col gap-4 px-8 w-full h-full overflow-hidden overflow-y-auto no-scrollbar
                        lg:mt-0 lg:pt-10  lg:pl-72 box-border
                    `
                }
                style={
                    {'width' : maxContent ? (maxContent + "px") : null}
                }
            >
                {children}
                <RootFooter/>
            </div>
        </main>
    )
}