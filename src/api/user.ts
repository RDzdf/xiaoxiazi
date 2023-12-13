/* 
  src/api/index.js 
*/

import request from "@/api/request";
export function getTest(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    params: { data },
  });
}
