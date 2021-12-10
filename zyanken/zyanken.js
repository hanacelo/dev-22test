alert("hahaha");


      //グーを押すと、ランダムで相手の手を表示
      
      $('#gu').on('click',function(){ 
      const gu = Math.floor(Math.random()*3);
       console.log(gu,"ランダムな数を表示");

       var hatena;
       if(gu === 0){
        $("h1").html('<img src = "images/gu.png"></img>' + "あいこ"); 

       }else if(gu === 1){
        $("h1").html('<img src ="images/choki.png"></img>' + "勝ち");

        }else if(gu === 2){
            $("h1").html('<img src="images/pa.png"></img>' + "負け");
        
        }});


      //チョキを押すと、ランダムで相手の手を表示
       $('#choki').on('click',function(){
       const choki = Math.floor(Math.random()*3);
       console.log(choki,"aiteの手をランダムで表示");

       var hatena;
       if(choki === 0 ){
        $("h1").html('<img src = "images/gu.png"></img>' +"負け")

       }else if(choki === 1){
        $("h1").html('<img src ="images/choki.png"></img>' + "引き分け")

       }else if(choki === 2){
        $("h1").html('<img src="images/pa.png"></img>' + "勝ち")
        }});


      //パーを押すと、ランダムで相手の手を表示
       $('#pa').on('click',function(){
       const pa = Math.floor(Math.random()*3);
       console.log(pa,"aiteの手をランダムで表示");

       var hatena;
       if(pa === 0){
        $("h1").html('<img src = "images/gu.png"></img>' 
        + "勝ち")

       }else if(pa === 1){
        $("h1").html('<img src ="images/choki.png"></img>' 
        + "負け")

       }else if(pa === 2){
           $("h1").html('<img src="images/pa.png"></img>' 
           + "引き分け")
        }});