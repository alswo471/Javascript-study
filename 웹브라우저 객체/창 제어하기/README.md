# 창 제어하기

###  창 여닫기

* 새로운 창 또는 탭을 열 때는 open 메서드를 사용합니다. open 메서드의 사용법은 다음과 같습니다.

~~~html
var w = open(url, 창의 이름, 옵션);
~~~

* url : 생략하면 빈 페이지가 표시된다.
* 창의 이름 : 생략하면 이름이 없는 창을 연다. 이름이 같은 창이 있다면 새로 열지 않고 그 창에 표시 
* 옵션 : 창의 설정 값(창의 크기 등) 생략하면 기본 크기로 표시
* open 메서드는 새로운 창이 Window 객체를 반환합니다.

> 열린 창을 닫을 때는 close 메서드를 사용
~~~html
w.close();
~~~

> 세 번째 인수의 옵션은 옵션의 이름=값을 쉽표로 연결한 문자열이며, 사용할 수 있는 옵션의 목록은 다음과 같습니다.



|옵션의이름|설명|
|---|---|
|width|창 너비|
|height|창 높이|
|location	|주소 표시줄 표시 여부(yes 또는 no)|
|scrollbars	|스크롤 막대 표시 여부(yes 또는 no)|
|toolbar	|도구 모음 표시 여부(yes 또는 no)|
|status	|상태 표시줄 표시 여부(yes 또는 no)|
|menubar	|메뉴 막대 표시 여부(yes 또는 no)|

~~~html
window.addEventListener("DOMContentLoaded", function(){
    var w;
    document.getElementById("open").onclick = function() {      
        w = open("https://www.naver.com/", "newpage", "width=500, height=500");
    };
    document.getElementById("close").onclick = function() {
        if(w) w.close();
    };
});
~~~

### 창 제어하기

~~~html
w.moveBy(10, 20);  // 수평 방향(오른쪽)으로 10px 이동하고 수직 방향(아래쪽)으로 20px 이동
w.moveTo(100, 150);  // 창의 왼쪽 좌표(100, 150)로 이동

w.resizeBy(10, 20);  // 너비를 10px, 높이를 20px 키운다
w.resizeTo(200, 150);  // 너비를 200px, 높이를 150px로 설정한다.

w.scrollBy(0,100);  // 아래쪽으로 100px 스크롤한다.
w.scrollTo(0,0);  // 시작 위치로 이동한다.
~~~
