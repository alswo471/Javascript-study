# 상속

* C++나 Java처럼 클래스를 이용하는 객체 지향 언어이지만 자바스트립트는 클래스가 아닌 객체를 상속
* 프로토타입 체인(상속)이라고 부르는 객체의 자료구조로 구현되어 있다.
* 이미 정의된 프로퍼티와 메서드의 코드를 재사용 가능하고 새로운 기능을 추가해 확장된 객체를 만들 수 있다. 
* 중복 코드를 작성하지 않아도 되서 유지보수에 좋은 프로그램을 구현한다.

## 프로토타입 체인

* 모든 객체는 내부 프로퍼티를 가지고 있다.
* ECMA 6 에선 __proto__프로퍼티에 [[prototype]]의 값이 저장된다.
* 객체의 __proto__는 그 객체에 상속해준 부모 객체를 가르킨다.

<img width="535" alt="image" src="https://user-images.githubusercontent.com/92145785/181489586-8be2c808-7cfa-4c0c-800e-8070c01daffd.png">


~~~html
var A = {
	name: "Min",
	sayHello : function() { console.log("Hello! " + this.name); }
};

var B = {
	name: "Alswo"
};

B.__proto__  = A;
var C = {};
C.__proto__ = B;

C.sayHello();  // -> "Hello! Alswo"
~~~

> C 가 자신에게 name이라는 프로퍼티가 있는지 확인 -> 안에서 찾을 수 없으므로 C.__proto__가 가르키는 B가 name 프로퍼티가 있는지 확인 -> B에 name의 프로퍼티를 찾으면  이 값을 this.name값으로 사용(만약 없으면 상위로 객체에서 확인)

* __proto__프로퍼티가 가리키는 객체를 차례대로 거슬러 올라가며 검색한다. 이와 같은 객체의 연결 고리를 프로토타입 체인이라고 한다.

## new 연산자

~~~html
function Student(name, age) {
	this.name = name;
	this.age = age;
}

Student.prototype.StudentsInformation= function() {
	return "학생 정보 : " + this.name + this.age;
};
~~~

### new 연산자로 Student 생성자 만들어지는 과정

* 1.빈 객체 생성
~~~html
var newObj = {};
~~~
* 2. 생선된 객체 프로토타입 설정(Student.prototype)
* 3. Studnet.prototype이 가리키는 값이 객체가 아니라면 Object.prototype을 프로토타입으로 설정
~~~html
newObj.__proto__ = Student.prototype;
~~~
> 이때 this는 (1)로 생성한 객체로 설정합니다. 인수는 new 연산자와 함께 사용할 인수를 그대로 사용


* 4. 완성된 객체를 결과값으로 반환합니다.
~~~html
return newObj;
~~~

> (2)에서 생성자의 prototype 프로퍼티 값을 인스턴스의 __proto__ 프로퍼티 값으로 대입 이를 이용해 인스턴스의 프로토타입 체인이 정의되며, 생성자로 생성한 모든 인스턴스가 생성자의 프로토타입 객체의 프로퍼티를 사용할 수 있게 됩니다. 이것이 prototype 프로퍼티의 역할이다.


