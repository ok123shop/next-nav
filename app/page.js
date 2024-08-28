import Image from "next/image";
import openService from "@/service/openService";



function getData() {
  return new Promise((ok,err) => {
      Promise.all([
          openService.navList(),
          openService.spuList(),
      ]).then(([navList,spuList]) => {
          spuList.unshift({
            id:0,
            title: '美区苹果ID',
            images:['https://oss.ok123.shop/blob/icons/appstore.png'],
            displayPrice: '限时免费',
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
              <div key={spu.id} className="tooltip tooltip-bottom" data-tip={spu.title}>
                <a  className="rounded cute shadow-lg box-border border p-4 block   " href={`https://ok123.shop${spu.id ? '/spu/' + spu.id : ''}`} target="_blank">
                  <div className="flex items-center gap-2">
                      <Image className=" rounded-full " src={spu.images[0]} width={45} height={45} alt={spu.title}/>
                      <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="font-bold">{spu.title}</p>
                          <div className="text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis text-red-400 text-left">{spu.displayPrice}</div>
                      </div>
                  </div>
                </a>
              </div>
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
                    <div key={nav.id} className="tooltip tooltip-bottom" data-tip={nav.description}>
                      <a className=" rounded cute shadow-lg box-border border  p-4 block " href={nav.url} target="_blank">
                        <div className="flex items-center gap-2">
                            {
                              nav.icon ? 
                              (
                                <Image className=" rounded-full " src={nav.icon} width={40} height={40} alt={nav.title}/>
                              )
                              :
                              (
                                <div className="avatar avatar-sm placeholder">
                                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                    <span className="text-sm">{nav.title.substring(0,2)}</span>
                                  </div>
                                </div>
                              )
                            }

                            <div className="flex flex-col items-start w-full overflow-hidden">
                                <p className="font-bold">{nav.title}</p>
                                <div className="text-sm w-full text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis text-left">{nav.description}</div>
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
