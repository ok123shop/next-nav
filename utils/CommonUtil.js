import mitt from "@/_libs/mitt"




function copy(value){
    if(navigator.clipboard.writeText){
        navigator.clipboard.writeText(value).then(function() {
            mitt.emit("MSG","复制成功")
        }, function(err) {
            mitt.emit("MSG",{type:"error",msg:"无法复制文本"});
        });
    }else{
        const input = document.createElement('textarea');
        input.setAttribute('value', value);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        mitt.emit("MSG","复制成功")
    }
}

export default {copy}