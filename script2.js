window.addEventListener("DOMContentLoaded", function(){
    var w;
    document.getElementById("open").onclick = function() {      
        w = open("https://www.naver.com/", "newpage", "width=500, height=500");
    };
    document.getElementById("close").onclick = function() {
        if(w) w.close();
    };
});

