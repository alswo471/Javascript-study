## 함수 리터럴로 함수 정의

* 함수 리터럴은 무명함수 또는 익명 함수라고 한다.
* 함수 리터럴을 사용할땐 끝에 세미콜론(;)을 붙여야 한다
* 함수 리터럴로 정의한 함수는 끌어올리지 않는다

~~~html
var circle = function(x) { 
	return x * x; 
};
~~~

~~~html
var square = function sq(x) { return x * x; }; //익명함수에도 이름을 붙일 수 있다 
~~~
