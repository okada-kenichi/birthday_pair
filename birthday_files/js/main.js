//birthday.js

//365通りの誕生日を作る
function oneYear(room_member, turn) {
    var year = []
    for (var i = 0; i < 365; ++i) {
        year.push(i);
    }
    rep(room_member, turn, year)//turnで指定した数だけrepを繰り返す
}

//任意の数のクラスメートを作る
function roomMake(room_member,year) {
    var room = []
    for (var i = 0; i < room_member; ++i) {
        var select = Math.floor(Math.random() * year.length);
        room.push(select);
    }
    return room
}

//ペアの数を検出し全体の何パーセントになるか返す
function birthday_check(room) {
    var cut = Array.from(new Set(room))
    var all = room.length
    var single = cut.length
    if(all != single){
        return 1
    }
    return 0
}

// turnの回数だけbirthday_check()を繰り返し平均を求める
function rep(room_member, turn,year){
    var repall = 0
    for (var i = 0; i < turn; ++i){    
        var room = roomMake(room_member,year);
        repall += birthday_check(room);
    }
    console.log(repall,turn);
    var abr = (Math.floor((repall*(100/turn))*1000))/1000;//ペアの出現する百分率を小数点3位まで
    var abrRnd = Math.floor(repall*(100/turn));//ペアの出現する百分率を整数に丸めた
    var nokori = 100-abrRnd;
    relight(room_member,abr,abrRnd);
    // console.log(room_member+"人のクラスがペアをもつクラスになる確率"+abr+"パーセント")
    // console.log(`${room_member}人のクラスが100クラスあった時、そのうち${abrRnd}クラスが「同じ誕生日の人がいる」クラスになる(全員の誕生日が違うのは${nokori}クラス)`)
}





//oneYear(40, 10000)// (クラスメート数,検証回数)