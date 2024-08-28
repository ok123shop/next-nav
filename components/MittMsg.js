'use client';
import { useEffect, useState ,useRef} from 'react';
import emitter from '@/_libs/mitt';

const event = 'MSG';

export default function MittMsg() {
    const [msgList, setMsgList] = useState([]);

    const removeItem = () => {
        setTimeout(() => {
            setMsgList((list) => list.slice(1))
        }, 3000);
    }

    useEffect(() => {
        const handler = (data) => {
            if (!data) {
                return;
            }
            let item = typeof data === 'string' ? { type: 'success', msg: data } : { ...data };
            setMsgList((prevMsgList) => [...prevMsgList, item]);
            removeItem();
        };

        emitter.on(event, handler);

        // 清理事件监听器以避免内存泄漏
        return () => {
            emitter.off(event, handler);
        };
    }, []); // 空依赖数组意味着这个 effect 只会在组件挂载和卸载时执行
    


  return (
    <div className="toast toast-top toast-center pt-20">
      {msgList.map((item, index) => (
          item.type === 'success' ? 
          (<div key={index} className={`alert alert-success text-white text-center`}>
            <span>{item.msg}</span>
          </div>)
          :
          item.type === 'error' ? 
          (<div key={index} className={`alert alert-error text-white text-center`}>
            <span>{item.msg}</span>
          </div>)
          :
          (<div key={index} className={`alert alert-info text-white text-center`}>
            <span>{item.msg}</span>
          </div>)
        
      ))}
    </div>
  );
}
