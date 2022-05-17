//◆◆◆◆◆◆Map/Set◆◆◆◆◆◆
// Map
// Mapはマップ型のコレクションを扱うためのビルトインオブジェクトです。 マップとは、キーと値の組み合わせからなる抽象データ型です。 

// マップの作成と初期化
// Mapオブジェクトをnewすることで、新しいマップを作れます。 作成されたばかりのマップは何も持っていません。 そのため、マップのサイズを返すsizeプロパティは0を返します。
/* const map = new Map();
console.log(map.size);
 */
// 次のコードでは、Mapに初期値となるエントリー（配列）の配列を渡しています。
/* const map = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(map.size);
 */
// 要素の追加と取り出し
// Mapには新しい要素をsetメソッドで追加でき、追加した要素をgetメソッドで取り出せます。
/* const map = new Map();
//新しい要素の追加
map.set("key", "value1");
console.log(map.size);
console.log(map.get("key"));
//要素の上書き
map.set("key", "value2");
console.log(map.get("key"));
 */
// deleteメソッドはマップから要素を削除します。 deleteメソッドに渡されたキーと、そのキーにひもづいた値がマップから削除されます。
/* const map = new Map();
//新しい要素の追加
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.size);
//指定したキーを削除
map.delete("key1");
console.log(map.size);
//全て削除
map.clear();
console.log(map.size);
 */

// マップの反復処理
// マップが持つ要素を列挙するメソッドとして、forEach、keys、values、entriesがあります。