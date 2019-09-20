/** 
 * 判断手机类型
 * 
*/

BrowserInfo = {      
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),      
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),      
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),      
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),      
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
