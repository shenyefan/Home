var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2c289b8db1830a6a2c8dedfe5f0f7422";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

fetch('https://v1.hitokoto.cn/?c=a&max_length=18')
.then(function (res){
    return res.json();
})
.then(function (data) {
    var hitokoto = document.getElementById('hitokoto');
    hitokoto.innerText = '「 ' + data.hitokoto + ' 」';
})
.catch(function (err) {
    console.error(err);
})

window.oncontextmenu=function(e){
    e.preventDefault();
}

console.log("%c\n          _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\    \\                /::\\    \\                /::\\____\\        \n       /::::\\    \\              /::::\\    \\              /::::|   |        \n      /::::::\\    \\            /::::::\\    \\            /:::::|   |        \n     /:::/\\:::\\    \\          /:::/\\:::\\    \\          /::::::|   |        \n    /:::/__\\:::\\    \\        /:::/__\\:::\\    \\        /:::/|::|   |        \n   /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\      /:::/ |::|   |        \n  /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\    /:::/  |::|   | _____  \n /:::/\\:::\\   \\:::\\    \\  /:::/\\:::\\   \\:::\\    \\  /:::/   |::|   |/\\    \\ \n/:::/  \\:::\\   \\:::\\____\\/:::/  \\:::\\   \\:::\\____\\/:: /    |::|   /::\\____\\\n\\::/    \\:::\\   \\::/    /\\::/    \\:::\\  /:::/    /\\::/    /|::|  /:::/    /\n \\/____/ \\:::\\   \\/____/  \\/____/ \\:::\\/:::/    /  \\/____/ |::| /:::/    / \n          \\:::\\    \\               \\::::::/    /           |::|/:::/    /  \n           \\:::\\____\\               \\::::/    /            |::::::/    /   \n            \\::/    /               /:::/    /             |:::::/    /    \n             \\/____/               /:::/    /              |::::/    /     \n                                  /:::/    /               /:::/    /      \n                                 /:::/    /               /:::/    /       \n                                 \\::/    /                \\::/    /        \n                                  \\/____/                  \\/____/         \n", "color:#00A1D6")
console.log("%cRelease 21w39a2", "color:#64A805")
console.log("%cPowered by Misaka Network", "color:#64A805")
console.log("%c© 2021 Shen Yefan. All Rights Reserved.", "color:#64A805")
