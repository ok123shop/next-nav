import Image from "next/image";
import openService from "@/service/openService";
import NavCard from "@/components/NavCard";



function getData() {
  return new Promise((ok,err) => {
      Promise.all([
          openService.navList(),
          openService.spuList(),
      ]).then(([navList,spuList]) => {
        spuList = spuList.map(spu => {
          return {
            id: spu.id,
            title: spu.title,
            icon: spu.images[0],
            description: spu.displayPrice,
            tags: spu.tags ? spu.tags.split(";") : []
          };
        })
        spuList.unshift({
          id:0,
          title: '美区苹果ID',
          icon:'https://oss.ok123.shop/blob/icons/appstore.png',
          description: '限时免费',
          tags: ['免费','可下载小火箭']
        })
        ok({navList,spuList})
      })
  })
}


export default async function Home() {
  let {navList,spuList} = await getData();
  return (
    <main className="flex flex-col gap-2">
      <div className="mb-6">
        <a className="text-2xl mb-2 block text-gray-400">限时折扣</a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            spuList.map(spu => (
              <NavCard key={spu.id} nav={spu}/>
            ))
          }
        </div>
      </div>
      {
        navList.map(item => (
          <div key={item.id} className="mb-6">
              <a name={item.id} className="text-2xl mb-2 flex items-center gap-2 text-gray-400">
                {item.title}
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {
                  item.childList?.map(nav => (
                    <NavCard key={nav.id} nav={nav}/>
                  ))
                }
              </div>
            </div>
        ))
      }
      
      
    </main>
  );
}
