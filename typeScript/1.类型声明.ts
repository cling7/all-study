let a: object
a = {}
a = function(){}

// {} 用来指定对象中包含那些属性，必须要有该属性
let b: {name:string} // 必须要有name，且只能由name一个属性
b = {name:'孙悟空'}

// 加一个问号表示可有可不有
let c: {name:string,age?:number}
c = {name:'111'}

// 只限定一个属性名，其他可有可没有 使用 [属性名: 属性名类型]:any语法
let d: {name:string,[propName:string]:any}
d = {name:'111',age:'11',b:{}}

// 标识e是一个function类型，参数为number类型的a与b，返回值为number类型
let e: (a:number,b:number) => number
e = function(a,b){
  return 1
}

// 表示数值类型的数组,两种声明方式
// let f:number[]
let f:Array<number>
f = [1,2,3]

// 元组（tuple）：长度固定的数组
let g:[string,string] // 只能是两个string类型的元素
g = ['11','22']

// 枚举（enum）：
enum Gender{
  Male=1,
  Female=2
}
let h:{name:string,gender:Gender}
h = {
  name:'孙悟空',
  gender:Gender.Male
}
console.log(h.gender)

// &表示同时
let i: {name:string} & {age:number}
i = {
  name:'1',
  age:11
}

// 类型的别名
// type myType = string;
// let j = 1 | 2 | 3 | 4 | 5
// let k:myType

type myType = 1 | 2 | 3 | 4 | 5;
let j:myType
// j = 6
j = 2