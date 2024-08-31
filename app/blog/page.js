import MenuLayout from "@/components/layout/MenuLayout";
import BlogMenu from "@/components/BlogMenu"
import Image from "next/image";

export default async function BlogPage(params) {
    const list = [1,2,3,4,5];
    
    return(
        <MenuLayout
        menu={<BlogMenu/>}
        >
            {
                list.map((item,index) => (

        
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
                                src={'https://oss.ok123.shop/blob/Disney-%E7%BB%8F%E5%85%B8%E7%94%B5%E5%BD%B1.jpg'}
                                layout="fill"
                                objectFit="cover"
                                className="h-auto rounded-l-lg transform transition-transform duration-500 group-hover:scale-110"
                                alt="title"
                                priority={true}
                            />
                        </div>
                        <div className="p-8 py-12 flex-1">
                            <a className="link link-hover font-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl">Disney+注册及下载教程-2024年中国迪士尼订阅指南</a>
                            <p className="my-6 text-sm text-gray-500">更新于 2024-08-13 | Disney指南</p>
                            <p className="line-clamp-2 text-md ">
                            作为当前全球流媒体市场的No.2，Disney+于2019年成立后一路过关斩将，凭借其自己的特色版权IP、周边等特点，获得了大批用户用的喜爱，目前已经拥有超过1.5亿用户。Disney+注册及下载的过程都比较简单，就是账号的分类、分区复杂一点，另外就是对节点的选择比较挑剔，很容易出现因为IP的问题导致账号登陆失败。本文总结了Disney+各区价格及省钱订阅的方法，教你轻松在中国观看迪士尼旗下的漫威、星球大战和经典动画电影。
    Disney+是什么？Disney+官方网站：https://www.disneyplus.com/
    Disney+，又被称为Disney Plus，是迪士尼于2019年11月推出的在线流媒体视频点播平台，虽然成立时间短，但已经拥有超过 1200 部电影和 16000 集剧集，这当然都归功于迪士尼平台多年的版权积累以及雄厚的经济实力，在Netflix、HBO Max、Amazon Prime Video 等巨头林立的流媒体市场中分到了一杯羹。
    为了丰富Disney+的内容库，2019年迪士尼正式收购了21世纪福克斯，自此形成了包含迪士尼、皮克斯、漫威、卢卡斯影业、福 ...
                            </p>
                        </div>
                    </div>
                </div>
                ))
            }
        </MenuLayout>
    )
}