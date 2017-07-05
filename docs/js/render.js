/**
 * 描画処理
 * デバッグ文字などを描画する
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function render() {
    game.debug.text("test:"+game.input.x+","+game.input.y,0,20);
    dude.x=game.input.x;
    dude.y=game.input.y;
}
