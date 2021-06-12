//render.js

//ボタンが押された時
function clickBtn() {
  var selectNum = document.getElementById("myNum").value;
  oneYear(selectNum, 4649);
}

//html内のanswer,captionを書き換える
function relight(room_member,abr,abrRnd) {
  var myanswer = document.getElementById("answer");
  if(abr == 100){
    myanswer.innerHTML = `<p id="answer"><mark>ほぼ</mark>100%</p>`;//JSの小数点の都合で頭打ちの100パーセントになってしまっとき
  }else{
    myanswer.innerHTML = `<p id="answer">${abr}%</p>`;//正しくはこちら
  }
  var mycaption = document.getElementById("caption");
  var nokori = 100-abrRnd;
  mycaption.innerHTML = `<p id="caption">${room_member}人のクラスが100クラスあった時<p>そのうち${abrRnd}クラスが<em  class="br">同じ誕生日の人がいるクラス</em></p><p>(${room_member}人全員の誕生日が違うのは${nokori}クラス)</p></p>`;
}
