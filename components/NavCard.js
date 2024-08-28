import Image from "next/image";


export default function NavCard({nav}){
    return (
        <div className="tooltip tooltip-bottom h-full" data-tip={nav.description}>
            <a className=" rounded cute shadow-lg box-border border  p-4 block h-full" href={nav.url} target="_blank">
            <div className="flex items-center gap-2 border-b border-dashed pb-2 group">
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
                    <p className="font-bold group-hover:text-red-400">{nav.title}</p>
                    <div className="text-sm w-full text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis text-left">{nav.description}</div>
                </div>
                </div>
                <div className=" mt-2 w-full flex items-center gap-2 flex-wrap">
                {
                    (nav.tags ? Array.isArray(nav.tags) ? nav.tags : nav.tags.split(";") : []).map(tag => (
                        <div className=" text-sm px-2 border rounded-lg hover:bg-red-400 hover:border-red-300 hover:text-white">{tag}</div>
                    ))
                }
                </div>
            </a>
        </div>
    )
}