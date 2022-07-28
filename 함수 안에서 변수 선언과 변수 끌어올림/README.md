# 함수 안에서 변수 선언과 변수 끌어올림

~~~html
function f() {
	console.log(a); // undefined -> 끌어올리지 않는다면 Reference Error 발생
	var a = "local";
	console.log(a); // -> local 
	return a;
} 
// 함수 중간 부분에서 변수를 선언하더라도 변수는 함수의 첫머리로 끌어올림
~~~
