/** 
 *  现在浏览器script标签支持 async 和 defer 属性. 应用这些属性当script被下载时，浏览器更安全而且可以并行下载（下载script并不阻断HTML解析）。
    1.async标记的Script异步执行下载，并执行。这意味着script下载时并不阻塞HTML的解析，并且下载结束script马上执行。
    2.defer标签的script顺序执行。这种方式也不会阻断浏览器解析HTML。
    跟 async不同, defer scripts在整个文档里的script都被下载完才顺序执行。
*/