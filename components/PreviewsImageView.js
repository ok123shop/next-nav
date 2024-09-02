'use client'
import Image from "next/image";
import { useEffect, useState } from "react"

export default function PreviewsImageView(props) {
    const [scale, setScale] = useState(1); // 初始缩放比例
    const [currentX, setCurrentX] = useState(0); // 初始 X 轴平移距离
    const [currentY, setCurrentY] = useState(0); // 初始 Y 轴平移距离

    useEffect(() => {
        const image = document.querySelector('.draggable-image');
        let isDragging = false;
        let startX, startY;

        image.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - currentX; // 记录鼠标点击时的 X 位置
            startY = e.clientY - currentY; // 记录鼠标点击时的 Y 位置
            image.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const newX = e.clientX - startX; // 计算 X 轴拖动的距离
            const newY = e.clientY - startY; // 计算 Y 轴拖动的距离
            setCurrentX(newX); // 更新 X 轴平移距离
            setCurrentY(newY); // 更新 Y 轴平移距离
            image.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`; // 应用 X 和 Y 轴平移和缩放效果
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            image.style.cursor = 'grab';
        });

        return () => {
            document.removeEventListener('mousemove', () => {});
            document.removeEventListener('mouseup', () => {});
        };
    }, [scale, currentX, currentY]);

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            // 向上滚动，放大图片
            setScale((prevScale) => Math.min(prevScale + 0.1, 5)); // 最大放大到 5 倍
        } else {
            // 向下滚动，缩小图片
            setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // 最小缩小到 0.5 倍
        }
    };

    return (
        <div className="w-full h-full relative">
            <div 
                className="w-full h-16 bg-gray-950 fixed left-0 top-0 flex items-center" 
                 // 监听滚轮事件
            >
                <div className="flex-1">图片预览</div>
                <div className="flex gap-2 items-center pr-4">
                    <button className="btn btn-circle btn-sm" onClick={props.onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full " onWheel={handleScroll}>
                <Image 
                    {...props}
                    className="draggable-image preview-image cursor-grab  ease-in-out" 
                    style={{ transform: `translate(${currentX}px, ${currentY}px) scale(${scale})` }} // 应用缩放和平移效果
                />
            </div>
        </div>
    )
}
