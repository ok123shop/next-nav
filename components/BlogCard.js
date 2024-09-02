'use client'
import Image from "next/image";

export default function RootMenu({data}) {
  return (
    data && data.length ? (
    data.map((item,index) => (

      <div key={index} className="flex flex-col gap-4" >
          <div 
              className={`
              flex flex-col md:flex-row items-center shadow-md rounded-lg tracking-wide border border-gray-200
              group
              `
              }
          >
              <div className={
                  `
                  w-full h-60 md:h-full md:w-5/12 relative
                  ${index % 2 == 0 ? '' : 'md:order-1'} 
                  order-0
                  overflow-hidden
                  `
              }>
                  <Image
                      src={item.cover}
                      layout="fill"
                      objectFit="cover"
                      className="h-auto rounded-l-lg transform transition-transform duration-500 group-hover:scale-110"
                      alt="title"
                      priority={true}
                  />
              </div>
              <div className="p-8 py-12 flex-1 relative">
                  <a className="link link-hover font-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl" href={`/blog/${item.id}`}>
                    {item.title}
                  </a>
             
                  <div className="my-6 text-sm text-gray-500 flex gap-2 items-center">
                  {
                    item.top ? (
                      <div className=" rounded px-2 bg-yellow-300">
                        置顶
                      </div>
                    ) : null
                  }
                  {
                        item.categoriesList.map((e) => (
                          <div key={e.id} className=" rounded px-2 bg-blue-300 text-white">
                            { e.title }
                          </div>
                        ))
                      }
                    {
                        item.tagList.map((e) => (
                          <div key={e.id} className=" rounded px-2 bg-red-300 text-white">
                            { e.title }
                          </div>
                        ))
                      }
                  </div>
                  <p className="line-clamp-2 text-md mb-4">
                    {item.description}
                  </p>
                  <div className="absolute right-4 -bottom-2 my-6 text-sm text-gray-300 flex gap-2 items-center">
                    <div>更新于 {item.updateDateTime}</div> 
                  </div>
              </div>
           
          </div>
      </div>
      )))
      :
      (
        <div className="flex flex-col justify-center items-center p-20 text-gray-400 gap-2">
          <p className="text-xl">很抱歉，暂无数据</p>
          <a className="link link-primary" href="/blog">查看全部文章</a>
        </div>
      )
  )
}
