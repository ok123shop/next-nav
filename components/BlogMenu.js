'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function RootMenu({data,mark}) {

  function markHandler(sectionId) {
    
    const element = document.getElementById(`ac_${sectionId}`);
    const container = document.getElementById('acwarp');
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

  useEffect(() => {
    markHandler(mark)
  },[])
  return (
      <div className="h-full overflow-hidden flex flex-col z-50  w-full pb-4">
        <div className="flex flex-col justify-center items-center py-6 gap-4 ">
          <label className="input input-bordered flex items-center gap-2 ">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </div>
        <div id="acwarp" className="w-full h-full overflow-hidden overflow-y-auto flex-1 flex flex-col items-center gap-4 px-4 ">
            {
              data.map(item => (
                <ul key={item.id} className="menu bg-base-200 rounded-box w-full">
                      <li  key={item.id}>
                        <h2 className="menu-title">{item.title}</h2>
                        {
                          item.childList?.map(child => (
                            <ul key={child.id} className=" before:content-none p-0 m-0">
                              <li id={`ac_${child.id}`} >
                                <a className={`${child.id == mark ? 'active' : null} flex flex-row items-center`} href={`/blog?id=${child.id}`}>
                                {
                                  child.icon ? (
                                    <Image src={child.icon} width={30} height={30} className=" rounded-full h-auto w-auto" alt={child.title}/>
                                  ) : (
                                    <div className="avatar placeholder">
                                      <div className="bg-gray-600 text-neutral-content w-8 rounded-full">
                                        <span>{child.title[0]}</span>
                                      </div>
                                    </div>
                                  )
                                }
                                  
                                  <span >{child.title}</span>
                                </a>
                              </li>
                            </ul>
                          ))
                        }
                      </li>
                </ul>

              ))
            }
            
        </div>
      </div>

  );
}
