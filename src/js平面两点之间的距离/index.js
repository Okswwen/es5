// 数据可以以数组方式存储，也可以是对象方式
let a = {x:'6', y:10},
        b = {x: 8, y: 20};
    function distant(a,b){
        let dx = Number(a.x) - Number(b.x)
        let dy = Number(a.y) - Number(b.y)
        return Math.pow(dx*dx + dy*dy, .5)
    }