
import { mock, Random } from 'mockjs';
import type { MockMethod } from "vite-plugin-mock";
import create from "./letsgo/content"

function parseUrlParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(url);

  // 遍历 URL 参数，将其存储到 params 对象中
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}


export default [
  {
    url: "/api/letsgo/content/:id",
    method: "get",
    response: (params) => {
      let { id } = params.query;
      let content = create.contentList().find(r => r.id == id)
      return content;
    },
  },
  {
    url: "/api/getList",
    method: "get",
    response: () => {
      return "logList";
    },
  },
  {
    url: "/api/getStatusList",
    method: "get",
    response: () => {
      return "statusList";
    },
  },
] as MockMethod[];

// 使用 mockjs 提供的 Mock 函数拦截请求
// mock('/api/letsgo/content', 'get', (req:any) => {
//   const id = req.params.id;
//     console.log(id)
//   // 根据 id 返回不同的数据
//   const data = Random.pick([
//     { id: '1', name: 'Alice' },
//     { id: '2', name: 'Bob' },
//     { id: '3', name: 'Charlie' },
//   ]);

//   return {
//     code: 200, // 自定义返回的状态码
//     data, // 返回的数据
//     message: 'Success' // 自定义返回的信息
//   };
// });