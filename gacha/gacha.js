alert("hahaha");

let result = $('#result');
let namae = $('#namae');

//召喚ボタンを押すと乱数での抽選が行われる
$("#button").on('click',function(){
    let gacha = Math.floor(Math.random()*20);
    console.log(gacha,"ランダムな数字")

    if(gacha === 0){
        result.html('<img src = "images/kento_nakazima.jpeg" width="500" height="auto" id="1"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
     }else if(gacha === 1){
        result.html('<img src = "images/mahiro_takasugi.jpeg" width="500" height="auto" id="2"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 2){
        result.html('<img src = "images/masaki_suda.jpeg" width="500" height="auto"  id="3"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 3){
        result.html('<img src = "images/ryo_narita.jpeg" width="500" height="auto"  id="4"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 4){
        result.html('<img src = "images/kento_yamazaki.jpeg" width="500" height="auto" id="5"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 5){
        result.html('<img src = "images/ryo_yoshizawa.jpeg" width="500" height="auto" id="6"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 6){
        result.html('<img src = "images/ryunosuke_kamiki.jpeg" width="500" height="auto" id="7"></img>') + namae.html("山崎賢人")　+ rarelity.html("★★★");
    }else if(gacha === 7){
        result.html('<img src = "images/shun_oguri.jpeg" width="500" height="auto" id="8"></img>') + namae.html("小栗旬")　+ rarelity.html("★★★");
    }else if(gacha === 8){
        result.html('<img src = "images/sosuke_ikematsu.jpeg" width="500" height="auto" id="9"></img>') + namae.html("池松壮亮")　+ rarelity.html("★★★");
    }else if(gacha === 9){
        result.html('<img src = "images/tomohisa_yamashita.jpeg" width="500" height="auto" id="10"></img>') + namae.html("山下智久")　+ rarelity.html("★★★");
    }else if(gacha === 10){
        result.html('<img src = "images/tatsuya_fuziwara.jpeg" width="500" height="auto" id="11"></img>') + namae.html("藤原竜也")　+ rarelity.html("★★★");
    }else if(gacha === 11){
        result.html('<img src = "images/yosuke_kuboduka.jpeg" width="500" height="auto" id="12"></img>') + namae.html("窪塚洋介")　+ rarelity.html("★★★");
    }else if(gacha === 12){
        result.html('<img src = "images/yudai_chiba.jpeg" width="500" height="auto" id="13"></img>') + namae.html("千葉雄大")　+ rarelity.html("★★★");
    }else if(gacha === 13){
        result.html('<img src = "images/daiki_tsuneta.jpeg" width="500" height="auto" id="14"></img>') + namae.html("常田大希")　+ rarelity.html("★★★");
    }else if(gacha === 14){
        result.html('<img src = "images/eiji_akaso.jpeg" width="500" height="auto" id="15"></img>') + namae.html("赤楚衛二")　+ rarelity.html("★★★");
    }else if(gacha === 15){
        result.html('<img src = "images/go_ayano.jpeg" width="500" height="auto" id="16"></img>') + namae.html("綾野剛")　+ rarelity.html("★★★");
    }else if(gacha === 16){
        result.html('<img src = "images/humiya_takahashi.jpeg" width="500" height="auto" id="17"></img>') + namae.html("高橋文哉")　+ rarelity.html("★★★");
    }else if(gacha === 17){
        result.html('<img src = "images/keita_machida.jpeg" width="500" height="auto" id="18"></img>') + namae.html("町田啓太")　+ rarelity.html("★★★");
    }else if(gacha === 18){
        result.html('<img src = "images/akihisa_shiono.jpeg" width="500" height="auto" id="19"></img>') + namae.html("塩野瑛久")　+ rarelity.html("★★★");
    }else if(gacha === 19){
        result.html('<img src = "images/takayuki_yamada.jpeg" width="500" height="auto" id="20"></img>') + namae.html("山田孝之")　+ rarelity.html("★★★");
    }
 
});

//htmlにresultの画像を表示
setTimeout(function(){
    $('#result').fadeOut("slow",function(){
        $(result).appendTo('#result').hide().fadeIn(2000);

    })});

//htmlにnameの名前を表示
    setTimeout(function(){
        $('#namae').fadeOut("slow",function(){
            $(namae).appendTo('#namae').hide().fadeIn(2000);
    
        })});    

// $("#button").on('click',function(){    
//     //召喚中画面が再生され終わったら消え、結果表示用の画面が出る
//     setTimeout(function(){
//         $('#result').fadeOut("slow",function(){
//             $('<img src="images/result.jpeg" width="500" height="auto">').appendTo('#try').hide().fadeIn(1000);
          
//         })});

//         //ここより上は動いてるっぽい

//     setTimeout(function(){
//         $('#result').html("");
//         $('#result').fadeOut("slow",function(){
//             $(result).appendTo('#try').hide().fadeIn(1000);
//         })});
    

//ここからゲットしたカードをlistに保存

$("#save").on("click",function(){
    //valの記述
    let key = $("#namae").val();
    console.log(key, namae);

    let value = $("#rarelity").val();  //htmlにまだ記述してない
    console.log(key, rarelity);
    
    localStorage.setItem(namae,rarelity);

    const html =`

        <p>${key}</p>
        <p>${value}</p>
    `;
    // htmlに表示＝jQueryで処理をしたものをhtmlに埋め込む
    $("#namae").append(html);
    $("#rarelity").append(html);
});



//2.clear クリックイベント
//localStorageの中身削除はとりあえず無視

//3.ページ読み込み：保存データ取得表示
for(let i =0; i<localStorage.length; i++){
    //key(何番目)でkey名を取得
    const key = localStorage.key(i);

    //htmlにjQueryで取得したものを表示
    const html =`<div id="list">${key}</div>`;
    $("#list").append(html);
};
