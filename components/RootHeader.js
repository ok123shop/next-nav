'use client'
import mitt from "@/_libs/mitt"


export default function RootHeader({}) {

  function onMenuShop(){
    mitt.emit("onMenuShopHandler")
  }

  return (
    <div className="shadow">
        <div className="navbar bg-base-100">
          <div className="flex-none">
            <button className="block lg:hidden btn btn-square btn-ghost" onClick={onMenuShop}>
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
          <div className="flex-1 flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2 w-full lg:w-1/2  ">
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
                <input type="text" className="grow" placeholder="Search" />
              </label>
              <button className="btn btn-primary">搜索</button>
          </div>
          <div className="flex-none hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>热点</a></li>
              <li><a>更多文章</a></li>
              <li><a>关于我们</a></li>
            </ul>
          </div>
          </div>
    </div>
  );
}
