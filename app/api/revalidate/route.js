// app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path');
  if(!path){
    return NextResponse.json({ message: 'path is null' }, { status: 500 });
  }

//   if (secret !== process.env.MY_SECRET_TOKEN) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

  try {
    // 使用 `revalidatePath` 重新生成指定路径的页面
    await revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
