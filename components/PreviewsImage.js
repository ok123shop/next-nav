'use client'
import Image from "next/image";
import PreviewsImageView from "@/components/PreviewsImageView";
import { createRoot } from 'react-dom/client'; // 从 "react-dom/client" 导入 createRoot

export default function PreviewsImage(props) {

    function previews() {
        // 创建遮罩层
        let mark = document.createElement('div');
        mark.className = "z-50 fixed w-full h-full left-0 top-0 bg-zinc-800 bg-opacity-50 backdrop-blur-sm";
        
        function onClose(){
            mark.remove();
        }
        // 创建一个 root 容器并将 PreviewsImageView 渲染到该容器中
        const root = createRoot(mark);
        root.render(<PreviewsImageView {...props} onClose={onClose}/>);

        // 将 mark 插入到文档 body 中
        document.body.appendChild(mark);
    }

    return (
        <Image className="w-full h-auto cursor-pointer" {...props} priority={true} onClick={previews} />
    )
}
