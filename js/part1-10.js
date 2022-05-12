//◆◆◆◆◆◆オブジェクト◆◆◆◆◆◆
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