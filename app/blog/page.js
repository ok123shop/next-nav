import MenuLayout from "@/components/layout/MenuLayout";
import BlogMenu from "@/components/BlogMenu"
import BlogCard from "@/components/BlogCard"
import Image from "next/image";
import openService from "@/service/openService";



export default async function BlogPage({params,searchParams}) {

    let { id,pageSize,pageNum } = searchParams;
    let articleCategoriesList = await openService.articleCategoriesList();
    let articleCategories = id ? (await openService.articleCategoriesGet({id})) : null;
    let query = {
        categoriesIdList: id || "",
        pageSize: pageSize || 10,
        pageNum: pageNum || 1,
    }
    let {total,rows} = await openService.articleBasePage(query);
    let baseQuery = `?id=${id}&pageSize=${query.pageSize}`
    let previousHref = pageNum > 1 ? `${baseQuery}&pageNum=${query.pageNum - 1}` : "";
    let nextHref = total > query.pageNum * query.pageSize  ? `${baseQuery}&pageNum=${query.pageNum + 1}` : "";

    return(
        <MenuLayout
        menu={<BlogMenu data={articleCategoriesList} mark={id}/>}
        >
            <div className="flex items-center gap-2 text-xl pb-4 border-b border-dashed">
                <h1 className="flex-1">
                    {articleCategories ? '《' + articleCategories.title + '》 相关的文章' : '全部文章'}
                </h1>
                {
                    articleCategories?.id ? (
                        <a className="btn btn-success text-white" href="/blog">查看全部文章</a>
                    ) : null
                }
            </div>
            <BlogCard data={rows} total={total} />
            <div className="mx-auto">
                <div className="join">
                    <a className={`join-item btn ${!previousHref ? 'btn-disabled' : null}`} href={previousHref}>«</a>
                    <a className="join-item btn">第 {query.pageNum} 页</a>
                    <a className={`join-item btn ${!nextHref ? 'btn-disabled' : null}`} href={nextHref}>»</a>
                </div>
            </div>
        </MenuLayout>
    )
}