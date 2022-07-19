# 유사 배열 객체

* 함수의 인수를 저장한 Arguments 객체
* DOM의 document.getElementsByTagName 메서드, document.getElementsByName 메서드 등이 반환하는 NodeList 객체
* 유사 배열 객체는 Array.prototype의 메서드를 사용할 수 없습니다. 그러나 배열로 참조하거나 대입할 수 있으며 for 문이나 for/in 문으로 반복 처리를 할 수 있습니다. 따라서 많은 자바스크립트 프로그램에서 배열로 다룰 수 있습니다.
* 그러나 요소의 추가와 삭제 또는 length 프로퍼티값을 요소의 개수와 연계하는 등의 처리는 배열처럼 동작하지 않습니다.
* 유사 배열 객체는 Array.prototype의 메서드를 직접 사용할 수 없습니다. 그러나 Function.prototype.call 메서드로 간접 호출하면 사용할 수 있습니다.

~~~html
var a = {0:"A", 1: "B", 2: "C", length: 3};
Array.prototype.join.call(a, ","); // -> "A,B,C"
Array.prototype.push.call(a, "D"); // -> Object {0: "A", 1: "B", 2: "C", 3 : "D", length : 4}
Array.prototype.slice.call(a, 0); //  -> ["A", "B", "C", "D"] : 진짜 배열로 변환
var a = {0: 1, 1: 2, 2: 3, length: 3};
Array.prototype.map.call(a, function(c) { return v*v; }); // -> [1, 4, 9]

//이처럼 Array.prototype의 메서드를 유사 배열 객체에 적용할 수는 있지만 concat 메서드를 제외한 나머지 배열 메서드는 배열처럼 동작하지 않습니다.
var a = {0: "A", 1: "B", 2: "C", length: 3};
Array.prototype.concat.call(a, ["D", "E"]);
// -> [{0: "A", 1: "B", 2: "C", length : 3}, "D", "E"]
~~~

### Array 타입의 객체의 장점

* 0 이상의 정수 값을 프로퍼티 이름으로 갖는다.
* length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이 바뀐다. 또한 length 프로퍼티 값을 줄이면 그에 따라 배열 크기가 줄어든다.
* 프로토타입이 **Array.prototype** 이므로 **Array.prototype** 의 메서드를 상속받아서 사용할 수 있다. 또한 instanceof 연산자로 평가하면 Array 생성자 함수로 생성된 객체로 표시된다.
* 그러나 이러한 성질 중에서 프로퍼티 이름이 0이상의 정수이며 length 프로퍼티가 있는 객체는 대부분 배열로 다룰 수 있습니다. 이러한 객체를 **유사 배열 객체** 라고 합니다.



