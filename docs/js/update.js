/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {
    //dudeとstarsグループ内のすべての星が衝突するようになる
    //let hit = game.physics.arcade.collide(dude,stars);

    //dudeと星が重なったら、その星を消す処理(pickStar)を呼び出す
    game.physics.arcade.overlap(dude,stars,pickStar,null,this);

    dude.x = game.input.x;
    dude.y = game.input.y;
    /*
    let hit = game.physics.arcade.collide(dude,st);

    if(st.input.pointerOver()) {
        st.kill();
    }
*/



}
//dude似、最初に設定したスプライト、starに次に設定したグループ内のスプライトが渡される
function pickStar(dude,star){
    star.kill();
}
