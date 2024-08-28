export default function Custom404() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">很抱歉</h1>
        <p>页面找不到了，404 page not found</p>
        <a className="btn btn-primary" href="/">返回首页</a>
      </div>
    );
  }
  