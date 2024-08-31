import openService from "@/service/openService";
import NavCard from "@/components/NavCard";
import NavMenu from "@/components/NavMenu";
import MenuLayout from "@/components/layout/MenuLayout";

async function getData() {
  let navList = await openService.navList()
  let spuList = await openService.spuList()
  spuList = spuList.map(spu => {
    return {
      id: spu.id,
      title: spu.title,
      icon: spu.images[0],
      description: spu.displayPrice,
      url: `https://ok123.shop/spu/${spu.id}`,
      tags: spu.tags ? spu.tags.split(";") : []
    };
  })
  spuList.unshift({
    id:0,
    title: '美区苹果ID',
    icon:'https://oss.ok123.shop/blob/icons/appstore.png',
    description: '限时免费',
    tags: ['免费','可下载小火箭'],
    url: `https://ok123.shop`,
  })
  navList.unshift({
    id:0,
    title: "超赞推荐",
    childList: spuList
  })
  return {navList}
}


export default async function Home() {
  let {navList,spuList} = await getData();
  return (
    <MenuLayout
      menu={<NavMenu data={navList}/>}
    >
      {
          navList.map(item => (
            <div key={item.id} className="mb-6">
                <a id={`link_${item.id}`} className="text-2xl mb-2  flex items-center gap-2 text-gray-400">
                  {item.title}
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                  {
                    item.childList?.map(nav => (
                      <NavCard key={nav.id} nav={nav}/>
                    ))
                  }
                </div>
              </div>
          ))
        }
    </MenuLayout>
  );
}
