// 使用class定义一个类
class Person{
  // 直接定义的属性是实例属性，需要通过对象的实例去访问：
  name:string = '孙悟空'
  age:number = 18

  // 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
  static gender:string = "男"
  // 使用readonly开头的属性表示只读的属性

  // 定义方法
    /*
    * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
    * */
    sayHello(){
        console.log('Hello 大家好！');
    }
}

const per = new Person()
console.log(Person.gender)