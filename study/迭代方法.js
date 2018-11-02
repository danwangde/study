
/*
ECMAScript 5 为数组定义了 5 个迭代方法。每个方法都接收两个参数：要在每一项上运行的函数和
（可选的）运行该函数的作用域对象——影响 this 的值。传入这些方法中的函数会接收三个参数：数
组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能
会也可能不会影响方法的返回值。以下是这 5 个迭代方法的作用。
     every() ：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true ，则返回 true 。
     filter() ：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
     forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
     map() ：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
     some() ：对数组中的每一项运行给定函数，如果该函数对任一项返回 true ，则返回 true 。
以上方法都不会修改数组中的包含的值。
在这些方法中，最相似的是 every() 和 some() ，它们都用于查询数组中的项是否满足某个条件。
对 every() 来说，传入的函数必须对每一项都返回 true ，这个方法才返回 true ；否则，它就返回
false 。而 some() 方法则是只要传入的函数对数组中的某一项返回 true ，就会返回 true 。请看以下
*/





var numbers=[1,2,3,4,5,6,7,8];

var  everyResult= numbers.every(function (item,index,array) {
    return (item>2);
})

console.log(everyResult);  //false


var someResult= numbers.some(function (item,index,array) {
    return (item>2)
})

console.log(someResult)    //true

/*
 下面再看一看 filter() 函数，它利用指定的函数确定是否在返回的数组中包含某一项。例如，要
返回一个所有数值都大于 2 的数组，可以使用以下代码。
*/

var numbers=[1,2,3,4,5,4,3,2,1];

var filterResult= numbers.filter(function (item,index,array) {
    return (item>2)
})

console.log(filterResult);    // [3,4,5,4,3]

/*这里，通过调用 filter() 方法创建并返回了包含 3、4、5、4、3 的数组，因为传入的函数对它们
每一项都返回 true 。这个方法对查询符合某些条件的所有数组项非常有用。*/

/*map() 也返回一个数组，而这个数组的每一项都是在原始数组中的对应项上运行传入函数的结果。
例如，可以给数组中的每一项乘以 2，然后返回这些乘积组成的数组，如下所示。*/


var numbers=[1,2,3,4,5,4,3,2,1];

var mapResult= numbers.map(function (item,index,array) {
    return item*item;
})

console.log(mapResult)   // [1,4,9,16,25,16,9,4,1]

/*以上代码返回的数组中包含给每个数乘以 2 之后的结果。这个方法适合创建包含的项与另一个数组
一一对应的数组。*/

/*最后一个方法是 forEach() ，它只是对数组中的每一项运行传入的函数。这个方法没有返回值，
本质上与使用 for 循环迭代数组一样。来看一个例子。*/

var numbers = [1,2,3,4,5,4,3,2,1];

numbers.forEach(function(item, index, array){
//执行某些操作
    item++;
    console.log(item)
});





