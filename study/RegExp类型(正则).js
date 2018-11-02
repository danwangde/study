var str='beatbatdsatdj';

var reg=/[bc]at/i;

console.log(str.search(reg));//匹配第一个"bat"或"cat"，不区分大小写

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
    console.log("The pattern was matched.");
}

var reg=/at/g;
console.log(reg.test(str));//匹配字符串中所有"at"的实例

var reg=/.at/gi;
console.log(reg.test(str));//匹配所有以"at"结尾的 3 个字符的组合，不区分大小写

/*

与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：
( [ { \ ^ $ | ) ? * + .]}

*/

/*

这些元字符在正则表达式中都有一或多种特殊用途，因此如果想要匹配字符串中包含的这些字符，
就必须对它们进行转义。下面给出几个例子。

*/


var reg=/\[bc\]at/i;  //匹配第一个" [bc]at"，不区分大小写


var pattern3 = /.at/gi;   //匹配所有以"at"结尾的 3 个字符的组合，不区分大小写.


var pattern3 = /.at/gi;   //匹配所有".at"，不区分大小写.


/*常用的高级表单校验：

匹配中文：[\u4e00-\u9fa5];

行首行尾空格：^\s*|\s*$;

Email：^\w+@[a-z0-9]+(\.[a-z]+){1,3}$;

网址：[a-zA-z]+://[^\s]*;

QQ号：[1-9][0-9]{4,9};

邮政编码：[1-9]\d{5};

身份证：[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x
*/



