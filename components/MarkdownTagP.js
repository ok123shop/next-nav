'use client'
import Image from "next/image";
import { createRoot } from 'react-dom/client'; // 从 "react-dom/client" 导入 createRoot
import BilibiliEmbed from "@/components/BilibiliEmbed";

const video_flag = "video::";
const split_flag = "::";

export default function PreviewsImage(props) {
    let {children} = props;
    let isVideo = children && children.startsWith(video_flag);
    let [_,platforms,id] = isVideo ? children.split(split_flag) : [];

    console.log(_,platforms,id)

    return (
        isVideo ? (
            <div className="bg-black">
                {
                    platforms === 'bilibili' ? (<BilibiliEmbed bvid={id}/>) : null
                }
            </div>
        ) : (<p {...props}></p>)
        
    )
}
