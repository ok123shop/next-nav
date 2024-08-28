import CONFIG from "../app.config"
import openService from "../service/openService"

const {site} = CONFIG;

function createData(paths,changeFrequency,priority){
    const list = []
    paths.forEach(path => {
        list.push({
            url: site + (path || ""),
            lastModified: new Date(),
            changeFrequency,priority
        })
    });
    return list;
}

export default async function sitemap() {


    return [
        ...createData([''],'daily',1),
        // ...createData(spuPathList,'daily',1),
        // ...createData(['/blob','/agree','/privacy','/support'],'monthly',0.8),
        // ...createData(['/about','/addr','/links'],'yearly',0.5),
    ];
    

  }