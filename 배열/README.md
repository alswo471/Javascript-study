# 배열

* 자바스크립트의 배열은 Array 객체 배열의 기능을 가상으로 흉내 낸 것
* Array 객체는 배열의 인덱스를 문자열로 변환해서 그것을 프로퍼티로 이용
* 배열의 요소 번호로 숫자 값 대신 문자열을 사용가능 
* Array 타입 객체이며 Array.prototype  ( <a href ="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array">Array.prototype 메서드 참고자료</a> ) 프로퍼티를 상속받음


 


<br>
</br>

### 배열 리터럴은 쉼표로 구분한 값을 대괄호([])로 묶어서 표현

~~~html
var nums = [1, 2, 3, 4];
~~~

* [...] 부분이 배열 리터럴이며 배열 값 하나를 배열 요소]
* 자바스크립트의 배열은 객체 타입 
* 변수에 대입하면 배열의 참조가 변수에 저장
* 배열 리터럴 안에 어떠한 요소도 작성하지 않으면 빈 배열

<br>
</br>

~~~html
var nums = [];
console.log(nums); // -> [] 요소는 생성되지 않는다.
~~~

~~~html
var a = [1, , 3];
console.log(a); // [1, undefined, 3] 두 번째 요소에 undefined가 표시되어 있지만 실제로는 없다.
~~~

~~~html
var evens = [ 1, 2, 3, 4 ];
evens.length  // 4 (배열 요소의 최대 인덱스 값 + 1)

// 자바스크립트에서는 배열 요소의 개수를 뜻하지 않는 경우가 있으므로 주의
~~~

<br>
</br>

## 배열의 Array 생성자


~~~html
var nums = new Array(2, 4, 6, 8); // [2, 4, 6, 8]을 생성
var nums2 = new Array();  // 빈 배열 []을 생성
var a = new Array(2, 4);  // 배열 리터럴 [2, 4]와 똑같은 배열을 생성
~~~

~~~html
var a = new Array(3); // 3 -> 배열의 길이만큼 생성
console.log(x.length); // 3

var x = new Array(-3); 양의 정수가 아니라면 오류
~~~

## 배열 요소의 추가와 삭제

~~~html
var a = ["A", "B, "C"]
a[3] = "D";
console.log(a);  // -> ["A", "B", "C", "D"] 
~~~

* 없는 배열요소에 값을 대입하면 새로운 요소가 추가됨
* push() : 요소를 배열 끝에 추가
* delete : 특정 배열 요소를 삭제 (delete로 삭제해도 length 프로퍼티 값은 안바뀜)
* for/in , hasOwnProperty : 배열 요소가 있는지 확인




### ECMAScript6 부터는 TypedArray 객체가 추가되었습니다. TypedArray의 배열 요소는 C나 Java 등의 배열과 마찬가지로 메모리의 연속된 공간에 차례대로 배치됩니다. 이를 활용하면 배열 요소를 빠르게 읽고 쓸 수 있습니다.
<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray">참고자료</a>
