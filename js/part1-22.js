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
/* const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
map.forEach((value, key) => {
  results.push(`${key}:${value}`);
})
console.log(results);
 */
//マップとしてのObjectとMap
/* const map = {};
// マップがキーを持つことを確認する
function has(key) {
    return typeof map[key] !== "undefined";
}
console.log(has("foo"));
// Objectのプロパティが存在する
console.log(has("constructor")); 
 */

// ショッピングカートを表現するクラス
/* class ShoppingCart {
  constructor() {
    // 商品とその数を持つマップ
    this.items = new Map();
  }
  //カートに商品を追加する
  addItem(item) {
    // `item`がない場合は`undefined`を返すため、Nullish coalescing演算子(`??`)を使いデフォルト値として`0`を設定する
    const count = this.items.get(item) ?? 0;
    this.items.set(item, count + 1);
  }
  //カート内の合計金額を出す
  getTotalPrice() {
    return Array.from(this.items).reduce((total, [item, count]) => {
      return total + item.price * count;
    }, 0);
  }
  // カートの中身を文字列にして返す
  toString() {
    return Array.from(this.items).map(([item, count]) => {
      return `${item.name}:${count}`;
    }).join(",");
  }
}
const shoppingCart = new ShoppingCart();
//商品一覧
const shopItems = [
  {name: "みかん", price: 100},
  {name: "りんご", price: 200}
];
// カートに商品を追加する
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

// 合計金額を表示する
console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.toString());
 */

// サーバーにJSON文字列を送るために、JSON.stringify関数を使います。 そのため、Objectのマップを作ってフォームの入力内容を持たせています。 このような簡易なマップにおいては、Objectを使うほうが適切でしょう。
// URLとObjectのマップを受け取ってPOSTリクエストを送る関数
/* function sendPOSTRequest(url, data) {
  // XMLHttpRequestを使ってPOSTリクエストを送る
  const httpRequest = new XMLHttpRequest();
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(JSON.stringify(data));
  httpRequest.open("POST", url);
}

// formのsubmitイベントを受け取る関数
function onLoginFormSubmit(event) {
  const form = event.target;
  const data = {
      userName: form.elements.userName,
      password: form.elements.password,
  };
  sendPOSTRequest("/api/login", data);
}
 */
// WeakMap
// WeakMapは、Mapと同じくマップを扱うためのビルトインオブジェクトです。 Mapと違う点は、キーを弱い参照（Weak Reference）で持つことです。
/* const map = new WeakMap();
// キーとなるオブジェクト
let obj = {};
// {} への参照をキーに値をセットする
map.set(obj, "value");
// {} への参照を破棄する
obj = null;
// GCが発生するタイミングでWeakMapから値が破棄される
 */
// イベントリスナーを管理するマップ
/* const listenersMap = new WeakMap();

class EventEmitter {
    addListener(listener) {
        // this にひもづいたリスナーの配列を取得する
        const listeners = listenersMap.get(this) ?? [];
        const newListeners = listeners.concat(listener);
        // this をキーに新しい配列をセットする
        listenersMap.set(this, newListeners);
    }
}

// 上記クラスの実行例

let eventEmitter = new EventEmitter();
// イベントリスナーを追加する
eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
});
// eventEmitterへの参照がなくなったことで自動的にイベントリスナーが解放される
eventEmitter = null;
 */