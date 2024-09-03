import HTTP from "@/utils/http"

const service = {
    async getCurrent(config){
        let api = "/user/user/getCurrent"
        try{
            return await HTTP.get(api,{cache: "no-store",...config})
        }catch(e){
            return null;
        }
    },
    async sendVcode(params){
        let api = "/common/vcode/send"
        return await HTTP.post(api,{cache: "no-store",params})
    },
    async loginByVcode(params){
        let api = "/login/vcode"
        return await HTTP.post(api,{cache: "no-store",params})
    },
    
    async spuList(){
        let api = "/open/goods/goods/spu/list"
        return await HTTP.get(api,{cache: "no-store"})
    },
    async spuDetail(params){
        let api = "/open/goods/goods/spu/get"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async spuAttrList(params){
        let api = "/open/goods/goods-spu-attr/list"
        let result = await HTTP.get(api,{cache: "no-store",params})
        result.forEach(item => item.itemList.filter(attrVal => attrVal.enabled).forEach((attrItem,index) => {
            attrItem.selected = index == 0 ? 1 : 0;
        }));
        return result;
    },
    async skuList(params){
        let api = "/open/goods/goods/sku/list"
        return await HTTP.get(api,{cache: "no-store",params})
    },  
    async faqList(params){
        let api = "/open/help/faq-base/list"
        return await HTTP.get(api,{cache: "no-store",params})
    },  
    async openAppleIdList(params){
        let api = "/open/goods/goods/sku/openAppleIdList"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async accessAdd(params){
        let api = "/open/stat/record/accessAdd"
        return await HTTP.post(api,{cache: "no-store",params})
    },
    async navRootList(params){
        let api = "/open/content/nav-base/listRoot"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async navList(params){
        let api = "/open/content/nav-base/list"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async articleCategoriesList(params){
        let api = "/open/content/article-categories/list"
        return await HTTP.get(api,{cache: "no-store",params})
    },    
    async articleCategoriesGet(params){
        let api = "/open/content/article-categories/get"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async articleBasePage(params){
        let api = "/open/content/article-base/page"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async articleBaseGet(params){
        let api = "/open/content/article-base/get"
        return await HTTP.get(api,{cache: "no-store",params})
    },
    async articleBaseBaseIdList(params){
        let api = "/open/content/article-base/baseIdList"
        return await HTTP.get(api,{cache: "no-store",params})
    },
   
}

export default { ...service }