import CONF from "@/app.config"
import mitt from "@/_libs/mitt"

const 
    initNextFetchConfig = (config) => {
        let def = {
            // no-store, reload, no-cache, force-cache, only-if-cached
            cache: "no-store",
            next: {},
        }
        
        let {cache,revalidate,cookies} = config || {};
        if(cache) def.cache = cache;
        if(revalidate) def.next.revalidate = revalidate;
        if(cookies) {
            def.headers = {}
            def.headers["Cookie"] = cookies;
        }
        def.credentials = 'include'; // 携带 cookie
        return def;
    },
    initQuery = (config) => {
        let params = config.params;
        if(!params){
            return "";
        }
        return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
    },
    msgToast = (resp) => {
        if(!resp.success){
            mitt.emit("MSG",{type:'error',msg: resp.msg})
        }
    },
    getHost = () => {
        // if(typeof window !== 'undefined'){
        //     return CONF.contentPath;
        // }else{
        //     return CONF.host + CONF.contentPath;
        // }
        return CONF.host + CONF.contentPath;
    }
;
const

    get = async (api,config) => {
        const url = getHost() + api + (api.indexOf("?") > -1 ? '&' : "?") + initQuery(config);
        let resp = await fetch(url,initNextFetchConfig(config)).then((res) => res.json());
        return config.originalResult ? resp : resp.data;
    },
    post = async (api,config) => {
        const url = getHost() + api;
        const body = JSON.stringify(config.params || {});
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
            ...initNextFetchConfig(config)
        }
        const resp = await fetch(url, params).then((res) => res.json());
        msgToast(resp);
        return config.originalResult ? resp : resp.data;
    }
;

export default {get,post}

