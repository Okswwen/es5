// readyState属性有五个状态值。

// 0：是uninitialized，未初始化。已经创建了XMLHttpRequest对象但是未初始化。
// 1：是loading.已经开始准备好要发送了。
// 2：已经发送，但是还没有收到响应。
// 3：正在接受响应，但是还不完整。
// 4：接受响应完毕。
// responseText：服务器返回的响应文本。只有当readyState>=3的时候才有值，根据readyState的状态值，可以知道，当readyState=3，返回的响应文本不完整，只有readyState=4，完全返回，才能接受全部的响应文本。

// responseXML：response  as Dom Document object。响应信息是xml，可以解析为Dom对象。
// status：服务器的Http状态码，若是200，则表示OK，404，表示为未找到。
// statusText：服务器http状态码的文本。比如OK，Not Found。

// 1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
// (2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
// (3)设置响应HTTP请求状态变化的函数
// (4)发送HTTP请求
// (5)获取异步调用返回的数据
// (6)使用JavaScript和DOM实现局部刷新
