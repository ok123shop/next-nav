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

function splitArray(arr, chunkSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      // 使用 slice 切分数组
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }



export default {copy,splitArray}