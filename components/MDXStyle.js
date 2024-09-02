import Image from "next/image";
import PreviewsImage from "@/components/PreviewsImage"

// 自定义组件映射，添加 className
const components = {

    h1: (props) => {
        return (<h1 id={`bd_${props.children}`} className="" {...props} />);
    },
    h2: (props) => <h2 id={`bd_${props.children}`} className="" {...props} />,
    h3: (props) => <h3 id={`bd_${props.children}`} className="" {...props} />,
    h4: (props) => <h4 id={`bd_${props.children}`} className="" {...props} />,
    h5: (props) => <h5 id={`bd_${props.children}`} className="" {...props} />,
    h6: (props) => <h6 id={`bd_${props.children}`} className="" {...props} />,

    a: (props) => <a className="link link-secondary text-red-400 " {...props}  target="_blank"/>,
    img: (props) => <PreviewsImage className="w-full h-auto cursor-pointer" {...props} width={1600} height={900} alt="img" priority={true}/>,
};

export default components;