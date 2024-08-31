'use client'
import Image from "next/image";

export default function RootMenu({data}) {

  function markHandler(event, sectionId) {
    event.preventDefault();
    
    const element = document.getElementById(`blog_${sectionId}`);
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
      <div className="h-full overflow-hidden flex flex-col z-50  w-full px-4">
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
        <div className="w-full h-full overflow-hidden overflow-y-auto flex-1 flex flex-col items-center gap-4">
          <ul className="menu bg-base-200 rounded-box w-full">
            <li>
              <h2 className="menu-title">Title</h2>
              <ul>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Title</h2>
              <ul>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Title</h2>
              <ul>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

  );
}
