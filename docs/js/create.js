/**
 * 作成処理
 * ゲームにアセットを追加するなどの生成処理を行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
 var dude;
 //JavaScriptの配列は、範囲が必要ない、後で増やすことができる

 //グループに変更
 var stars;

 // var star = array():

function create() {
    //新規グループを作成して、そのインスタンスをstarsに代入
    stars=game.add.group();

    //グループ内のオブジェクトに物理エンジンを有効にする
    stars.enableBody = true;

    //配列の最後に追加
    for (let i=0 ; i<100 ; i++){
         let star = stars.create(game.rnd.integerInRange(80, 560), game.rnd.integerInRange(80, 280), 'star');

        star.body.collideWorldBounds = true;
        star.body.bounce.x = 1;
        star.body.bounce.y = 1;
        star.inputEnabled = true;

        star.body.velocity.x = game.rnd.realInRange(-200,200);
        star.body.velocity.x = game.rnd.realInRange(-200,200);
    }

    /*star.forEach(function(st,index,ar){
        game.physics.arcade.enable(st);

        st.body.collideWorldBounds = true;
        st.body.bounce.x = 1;
        st.body.bounce.y = 1;
        st.inputEnabled = true;

        st.body.velocity.x = game.rnd.realInRange(-200,200);
        st.body.velocity.x = game.rnd.realInRange(-200,200);
    });*/

    dude = game.add.sprite(100,560,'dude');
    dude.frame = 4;
    dude.animations.add('left',[0,1,2,3],10,true);
    dude.animations.add('right',[5,6,7,8],10,true);
    dude.animations.play('right');

    dude.anchor = new Phaser.Point(0.5, 1);

    game.physics.arcade.enable(dude);



    //dude.body.velocity.x = 1000;
    //dude.body.velocity.y = 1000;
    dude.body.collideWorldBounds = true;
    dude.body.bounce.x = 1;
    dude.body.bounce.y = 1;



}
