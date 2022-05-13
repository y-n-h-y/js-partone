//◆◆◆◆◆◆オブジェクト◆◆◆◆◆◆
/*
■この章で学こと
・Objectというビルトインオブジェクトがある
・{}（オブジェクトリテラル）でのオブジェクトの作成や更新方法
・プロパティの存在確認するにはin演算子かObject.hasOwn静的メソッドを使う
・Optional chaining演算子（?.）はネストしたプロパティの存在確認とアクセスを同時に行う記法
・オブジェクトのインスタンスメソッドと静的メソッド
*/
/*
オブジェクトとはプロパティの集合のこと
プロパティとは、名前（キー）と値（バリュー）が対になったもの
{}中括弧はオブジェクトリテラル
*/
/*
const obj = {
  //キー：値
  key: "value"
};

const color = {
  //キー：値
  red: "赤",
  blue: "青",
  yerrow: "黄色"
};

//プロパティの値に変数名を指定すれば、そのキーは指定した変数を参照する
const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const object = {
  name: name
};
console.log(name);

const newObj = new Object();//新しくオブジェクト({})を生成
console.log(newObj);
 */
//プロパティへのアクセス
/*
プロパティにアクアセスするためには
ドット記法(.)とブラケット記法([])がある
 */
/* const obj = {
  key: "値"
};
console.log(obj.key);
console.log(obj["key"]);
//ブラケット記法だと変数名を入れる事ができる
const languages = {
  ja: "日本語",
  eng: "英語"
};

const lang = "ja";
console.log(languages[lang]);
//分割代入
const languages2 = {
  ja: "日本語",
  eng: "英語"
};
const { ja, eng } = languages2;
console.log(ja);
console.log(eng);
 */
//プロパティの追加
/* const empObj = {};//空のオブジェクトを生成
empObj.key = "値";
console.log(empObj.key);

const key = "key-string";
const obj = {};//空のオブジェクトを生成
obj[key] = "値";//変数の識別子として使えないのでブラケット[]をつかう
console.log(obj[key]);
 */
//プロパティの削除
/* const obj = {
  key1: "値1",
  key2: "値2"
};
//key1プロパティ削除
delete obj.key1;
console.log(obj);
//constで定義したオブジェクトは変更可能
//freezeメソッドを使うとプロパティの変更や追加はできない
 */
//プロパティの存在を確認する
/* const obj = {};
console.log(obj.notoFound);
 */
//プロパティの存在確認とundefinedとの比較
//in演算子か、.hasOwnメソッドを使う
//"プロパティ名" in オブジェクト;
/* const obj = {
  key: undefined
};
if ("key" in obj) {
  console.log("objは`key`プロパティを持っている");
} else {
  console.log("objは`key`プロパティを持っていない");
} */
//const obj = {}; Object.hasOwn(obj, "プロパティ名");
/* const objct = {
  key: undefined
};
// `obj`が`key`プロパティを持っているならtrueとなる
if (Object.hasOwn(objct, "key")) {
  console.log("objctは`key`プロパティを持っている");
} else {
  console.log("objctは`key`プロパティを持っていない");
}
 */
//Object.prototype.hasOwnPropertyメソッド
//オブジェクト名.hasOwnProperty("プロパティ名")
/* const obj = {
  key: undefined
};
if (obj.hasOwnProperty("key")) {
  console.log("objは`key`プロパティを持っている");
} else {
  console.log("objは`key`プロパティを持っていない");
}
 */