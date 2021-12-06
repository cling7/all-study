let a;
a = {};
a = function () { };
// {} 用来指定对象中包含那些属性，必须要有该属性
let b; // 必须要有name，且只能由name一个属性
b = { name: '孙悟空' };
// 加一个问号表示可有可不有
let c;
c = { name: '111' };
// 只限定一个属性名，其他可有可没有 使用 [属性名: 属性名类型]:any语法
let d;
d = { name: '111', age: '11', b: {} };
// 标识e是一个function类型，参数为number类型的a与b，返回值为number类型
let e;
e = function (a, b) {
    return 1;
};
// 表示数值类型的数组,两种声明方式
// let f:number[]
let f;
f = [1, 2, 3];
// 元组（tuple）：长度固定的数组
let g; // 只能是两个string类型的元素
g = ['11', '22'];
// 枚举（enum）：
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender || (Gender = {}));
let h;
h = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(h.gender);
// &表示同时
let i;
i = {
    name: '1',
    age: 11
};
let j;
// j = 6
j = 2;
let gender = 27;
document.getElementById('box');
