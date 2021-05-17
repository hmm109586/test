const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                data:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                data:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                data:'2006-3',
                price:128.00,
                count:1
            },
        ]
    },
    methods:{
       // getFinalPrice(price){
           // return'￥' +price.toFixed(2)
      //  }
      increment(index){
          this.books[index].count++
          

      },
      decrement(index){
        this.books[index].count--

    },
    removeHandle(index){
        this.books.splice(index,1)

    }
    },
    filters:{
        showPrice(price){
            return'￥' +price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            //1.普通for循环
            //let totalPrice=0;
           // for(let i=0;i<this.books.length;i++){
           //     totalPrice+=this.books[i].price*this.books[i].count

            //}
           // return totalPrice
           //2.for in/of
          //let totalPrice=0;
           // for (let i in this.books ){
              //  totalPrice+=this.books[i].price*this.books[i].count
           // }
           // return totalPrice


            //3.for(let i of this.books)
            let totalPrice=0;
            for (let item of this.books){
                totalPrice+=item.price*item.count
            }
            return totalPrice

            //reduce
            //编程方式：命令式编程/声明式编程
        //编程范式：面向对象（第一公民：对象）/函数式编程（第一公民：函数）
        //filter/map/reduce
        //filter中的回调函数有一个要求：必须返回一个布尔值
        //true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
        //false：函数内部会过滤掉这次n

        //map 函数的使用，所有的作用再填到别的数组
        //reduce：函数的使用
        //reduce作用对数组中所有的内容进行汇总
        //

        }
    },
   // const nums=[10,20,1111,222,444,40,50]
  //  let newNums=nums.filter(function(n){
     //   return n<100
        
        //})


})