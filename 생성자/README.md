# 생성자

* 생성자는 이름이 같은 인스턴스를 만들 수 있다 (단, 프로퍼티 값을 달라야함)
* 생성자는 객체를 생성하고 초기화 하는 역할
*  new 연산자로 생성한 객체 -> 생성자의 인스턴스
* 생성자는 파스칼 표기법을 따른다.


~~~html
function student(name,age){
    this.name=name;
    this.age=age;
}

var student = new student("민재", 15);
console.log(student);
~~~

## 메서드를 가진 객체를 생성하는 생성자

~~~html
function score(engscore, mathscore) {
	this.engscore = engscore;
	this.mathscore = mathscore;
	this.age = function() {
		return this.engscore + this.mathscore;
	};  
}


var a = new score(85 , 90);
console.log("두 점수의 합계 = "+ a.age());
~~~

### 문제점

* 생성자 안에서 this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가됨 따라서 메서드를 포함한 생성자는 메모리 소비


* 함수의 prototype 프로퍼티가 가리키는 객체 = 프로토타입 객체
* 프로토타입 객체의 프로퍼티는 생성자로 생성한 모든 인스턴스에서 그 인스턴스의 프로퍼티처럼 사용가능
* 인스턴스에 아무것도 정의 하지 않더라도(즉, 객체를 생성하지 않더라도) 처음부터 사용할 수 있는 것
* 한번만 생성자 Prototype 프로퍼티에 정의하면 인스턴스 생성시에 생성자 함수안에 포함 되지않더라도 계속 접근 및 사용이 가능 - 메모리 절약 가능

~~~html
function Score(engscore, mathscore) {
	this.engscore = engscore;
	this.mathscore = mathscore;
	
}
score.prototype.age = function() {
		return this.engscore + this.mathscore;
	};  

var a = new score(85 , 90);
console.log("두 점수의 합계 = "+ a.age());
~~~

