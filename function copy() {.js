function copy() {
    var targetCode = document.getElementById("kamesurvival.aternos.me:24344"); // コピー対象のテキストを選択する
    document.execCommand("Copy");                     // 選択しているテキストをクリップボードにコピーする
    alert("コピーしました！");                            // 任意でアラートを出す
}


function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}