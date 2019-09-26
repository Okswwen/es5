// 将请求进行 Promise 封装
const fetch = ({url, data}) => {

  // 打印接口请求的信息
  console.log(`【step 1】API 接口：${url}`);
  console.log("【step 2】data 传参：");
  console.log(data);

  // 返回 Promise
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.api + url,
      data: data,
      success: res => {
        
        // 成功时的处理 
        if (res.data.code == 0) {
          console.log("【step 3】请求成功：");
          console.log(res.data);
          return resolve(res.data);
        } else {
          wx.showModal({
            title: '请求失败',
            content: res.data.message,
            showCancel: false
          });
        }

      },
      fail: err => {
        // 失败时的处理
        console.log(err);
        return reject(err);
      }
    })
  })

}

/**
 * code 换取 openId
 * @data {
 *   jsCode - wx.login() 返回的 code
 * }
 */
export const wxLogin = data => {
  return fetch({
    url: "tbcUser/getWechatOpenId",
    data: data
  })
}

// 使用接口
import {
  wxLogin,
} from '../../utils/api.js'

wxLogin({
  jsCode: this.data.code
}).then(
  res => {
    console.log("【step 4】返回成功处理：");
    console.log(res.data);
  },
  err => {
    console.log("【step 4】返回失败处理：");
    console.log(err);
  }
)

