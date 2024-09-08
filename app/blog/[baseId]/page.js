import MenuLayout from "@/components/layout/MenuLayout";
import { notFound } from "next/navigation";
import openService from "@/service/openService";
import { MDXRemote } from 'next-mdx-remote/rsc'
import MDXStyle from "@/components/MDXStyle"
import Image from "next/image";
import BlogDetailMenu from "@/components/BlogDetailMenu";




function extractHeadings(mdxContent) {
    const headings = [];
    const regex = /^(#{1,3})\s(.+)$/gm; // 匹配1到5个#开头的标题

    let match;
    while ((match = regex.exec(mdxContent)) !== null) {
        headings.push({
            level: match[1].length, // 标题级别 (1到5)
            text: match[2],
        });
    }

    return headings;
}

function testData(){
  return {
    title: "test",
    categoriesList: [],
    tagList: [],
    contents: `
      # H1
      ## H2
      ### H3
      #### H4
      \`\`\`
      123
      \`\`\`
      video::bilibili::BV1ui421k7nc

    `
  }
}


async function getData(baseId){
  if(baseId < 1){
    return testData(baseId);
  }
  let data = await openService.articleBaseGet({id: baseId});
  if(!data){
      notFound()
  }
  return data;
}


// app/[id]/page.js
export async function generateStaticParams() {
  let baseIdList = await openService.articleBaseBaseIdList();
  // 返回这些 id 的路径
  return baseIdList.map((item) => ({
      baseId: item.toString()
  }));
}



export async function generateMetadata({params}) {
  let {baseId} = params;
  let data = await getData(baseId)

  return {
      title: data.title,
      keywords: data.keyword,
      description: data.description
  };
}




export default async function BlogDetail({params}) {
    let {baseId} = params;
    let data = await getData(baseId)
    const source = data.contents;
    let navList = extractHeadings(source);
    navList.unshift({level: 1, text: data.title})



    return(
        <MenuLayout
            menu={<BlogDetailMenu navList={navList}/>}
        >
            <div className="prose  bg-white py-20 ">
                <h1 id={`bd_${data.title}`}>{data.title}</h1>
                <div className="!my-2 text-sm text-gray-500 flex gap-2 items-center">
                  {
                    data.top ? (
                      <div className=" rounded px-2 bg-yellow-300">
                        置顶
                      </div>
                    ) : null
                  }
                  {
                        data.categoriesList?.map((e) => (
                          <div key={e.id} className=" rounded px-2 bg-blue-300 text-white">
                            { e.title }
                          </div>
                        ))
                      }
                    {
                        data.tagList?.map((e) => (
                          <div key={e.id} className=" rounded px-2 bg-red-300 text-white">
                            { e.title }
                          </div>
                        ))
                      }
                  </div>
                  <p className="text-sm text-gray-400">
                    更新于 {data.updateDateTime}
                  </p>

                
                {data.cover ? (<Image src={data.cover} width={1600} height={900} alt={data.title} className="w-full h-auto"/>) : null}
                <MDXRemote source={source} components={MDXStyle}/>
            </div>
        </MenuLayout>
        
    )
    
}