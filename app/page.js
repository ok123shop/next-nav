import Image from "next/image";
import openService from "@/service/openService";



function getData(id) {
  return new Promise((ok,err) => {
      Promise.all([
          openService.navList(),
          openService.spuList(),
      ]).then(([navList,spuList]) => {
          ok({navList,spuList})
      })
  })
}



export default async function Home() {
  let {navList,spuList} = await getData();
  return (
    <main className="flex flex-col gap-2">
      <div className="mb-6">
        <a className="text-2xl mb-2">限时折扣</a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            spuList.map(spu => (
                <a key={spu.id} className="rounded cute shadow-lg box-border border p-4 block " href={`https://ok123.shop/spu/${spu.id}`} target="_blank">
                  <div className="flex items-center gap-2">
                      <Image className=" rounded-full " src={spu.images[0]} width={45} height={45} alt="hello"/>
                      <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="font-bold">{spu.title}</p>
                          <div className="text-sm w-full text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis text-red-400">{spu.displayPrice}</div>
                      </div>
                  </div>
                </a>
            ))
          }
        </div>
      </div>
      {
        navList.map(item => (
          <div key={item.id} className="mb-6">
              <a name={item.id} className="text-2xl mb-2">{item.title}</a>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {
                  item.childList?.map(nav => (
                    <div key={nav.id} className="tooltip tooltip-bottom" data-tip={nav.description}>
                      <a className=" rounded cute shadow-lg box-border border  p-4 block " href={nav.url} target="_blank">
                        <div className="flex items-center gap-2">
                            <Image className=" rounded-full " src={'https://oss.ok123.shop/ok123/avatar/38.png'} width={45} height={45} alt="hello"/>
                            <div className="flex flex-col items-start w-full overflow-hidden">
                                <p className="font-bold">{nav.title}</p>
                                <div className="text-sm w-full text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">{nav.description}</div>
                            </div>
                          </div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
        ))
      }
      
      
    </main>
  );
}
