'use client'
import emitter from '@/_libs/mitt';
import { useEffect } from 'react';

function SubscriberComponent() {
    

    useEffect(() => {
        const eventList = [
            {event: 'LOGOUT',handler: () => {
                emitter.emit("MSG","注销成功")
                document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                window.location.href = "/"
            }}
        ]
        eventList.forEach(item => {
            let {event, handler} = item;
            emitter.on(event,handler);
        })
        return () => {
            eventList.forEach(item => {
                let {event} = item;
                emitter.off(event);
            })
        };
    },[])
    return (
        <></>
    );
}

export default SubscriberComponent;
