import Image from "next/image";


export default function NavCard({nav}){
    return (
        <div className="tooltip tooltip-bottom h-full " data-tip={nav.description}>
            <a className=" rounded cute shadow-lg box-border border dark:border-gray-800 p-4 block h-full dark:bg-base-300" href={nav.url} target="_blank">
            <div className="flex items-center gap-2 border-b border-dashed pb-2 group dark:border-gray-600">
  
                <div className="avatar avatar-sm placeholder ">
                    {
                        nav.icon ? (
                            <div className="w-10 rounded-full ">
                                <img className="rounded-full w-full h-full" src={nav.icon}  alt={nav.title} />
                            </div>
                        ):
                        (
                            <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                <span className="text-sm">{nav.title.substring(0,2)}</span>
                            </div>
                        )
                    }
                   
                </div>

                <div className="flex flex-col items-start w-full overflow-hidden">
                    <p className="font-bold group-hover:text-red-400">{nav.title}</p>
                    <div className="text-sm w-full text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis text-left">{nav.description}</div>
                </div>
                </div>
                <div className=" mt-2 w-full flex items-center gap-2 flex-wrap">
                {
                    (nav.tags ? Array.isArray(nav.tags) ? nav.tags : nav.tags.split(";") : []).map(tag => (
                        <div key={tag} className=" text-sm px-2 border rounded-lg hover:bg-red-400 hover:border-red-300 hover:text-white dark:bg-blue-900 dark:border-base-300
                        dark:hover:bg-blue-400 dark:hover:border-blue-300
                        ">{tag}</div>
                    ))
                }
                </div>
            </a>
        </div>
    )
}