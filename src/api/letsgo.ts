// import type { AxiosRequestConfig } from "axios";
import request from "@/api/request";

// export async function mergeFile(options: AxiosRequestConfig) {
//   return await request.post("/uploader/mergeFile", options.data || {});
// }

export async function getContent(data: any) {
  console.log("data:",data)
  return await request.post("/api/letsgo/content", data);
}
