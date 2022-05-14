//◆◆◆◆◆◆文字列◆◆◆◆◆◆
// 文字列リテラルには"（ダブルクォート）、'（シングルクォート）、`（バッククォート）の3種類があります。
// "（ダブルクォート）と'（シングルクォート）に意味的な違いはありません。 そのため、どちらを使うかは好みやプロジェクトごとのコーディング規約によって異なります。 
/* const double = "文字列";
const single = '文字列';
console.log(double === single);//ダブルクォート・シングルクォートどちらも同じ
 */
// テンプレートリテラル(バッククォート)では、文字列中に改行を入力できます。 次のコードでは、テンプレートリテラルを使って複数行の文字列を見た目どおりに定義しています。
/* const back = `1行目
2行目
3行目`; 
console.log(back);
 */

//文字列の中にリテラルと同じ記号が出現した場合は、\（バックスラッシュ）を使いエスケープする必要があります。
/* const str = "This book is \"jsprimer\"";
console.log(str);
 */

// 次の表では、代表的なエスケープシーケンスを紹介しています。 エスケープシーケンスは、"（ダブルクォート）、'（シングルクォート）、`（バッククォート）すべての文字列リテラルの中で利用できます。
/* 
エスケープシーケンス	意味
\'	                  シングルクォート
\"	                  ダブルクォート
\` 	                  バッククォート
\\	                  バックスラッシュ(\そのものを表示する)
\n	                  改行
\t	                  タブ
\uXXXX	              Code Unit(\uと4桁のHexDigit)
\u{X} ... \u{XXXXXX}	Code Point（\u{}のカッコ中にHexDigit）
 */
//改行のエスケープシーケンス
/* const multiline = "1行目\n2行目\n3行目";
console.log(multiline);
 */
//文字列の中にバックスラッシュがあった場合は、バックスラッシュ*2で対応する
// console.log("¯\\_(ツ)_/¯");

//文字列の結合
/* const str = "a" + "b";
console.log(str);

const str2 = "JavaScript";
console.log("Hallo" + str2 + "!");

const str3 = "JavaScript";
console.log(`Hallo${str3}!`);
 */

// 文字列では文字列[インデックス]のように指定した位置（インデックス）の文字へアクセスできます。
/* const str = "文字列";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
 */

// JavaScript（ECMAScript）は文字コードとしてUnicodeを採用し、文字をエンコードする方式としてUTF-16を採用しています。 UTF-16とは、それぞれの文字を16ビットのビット列に変換するエンコード方式です。 Unicodeでは1文字を表すのに使う最小限のビットの組み合わせをCode Unit（符号単位）と呼び、UTF-16では各Code Unitのサイズが16ビット（2バイト）です。
/* const str = "アオイ";
//16進数で表す
console.log(str.charCodeAt(0).toString(16));
console.log(str.charCodeAt(1).toString(16));
console.log(str.charCodeAt(2).toString(16));
 */
/* const str = String.fromCharCode(
  0x30a2, // アのCode Unit
  0x30aa, // オのCode Unit
  0x30a4  // イのCode Unit
);
console.log(str); // => "アオイ"
 */

//文字列の分解と結合
// 文字列を配列へ分解するにはStringのsplitメソッドを利用できます。 一方、配列の要素を結合して文字列にするにはArrayのjoinメソッドを利用できます。
//splitで文字を分解する
/* const strings = "青・赤・黄色".split("・");
console.log(strings);
//joinで文字を結合する
const strings2 = "青・赤・黄色".split("・").join(",");
console.log(strings2);
 */
// /\s+/は1つ以上のスペースにマッチする正規表現オブジェクトを作成する正規表現リテラルです。
/* const str = "a b c d";
// 1つ以上のスペースにマッチして分解する
const strings = str.split(/\s+/);
console.log(strings);
 */

//文字列の長さ
// Stringのlengthプロパティは文字列の要素数を返します。 文字列の構成要素はCode Unitであるため、lengthプロパティはCode Unitの個数を返します。
// console.log("文字列".length);

//文字列の一部を取得
// 文字列からその一部を取り出したい場合には、Stringのsliceメソッドやsubstringメソッドが利用できます。
//sliceとsubstringメソッドの違い => sliceは-1の場合末尾をとる substringの場合は-1を0と捉える
/* const str = "ABCDE";
console.log(str.slice(1));//全て取得
console.log(str.slice(1, 5));//
console.log(str.slice(-1));//
console.log(str.slice(1, 4));//
console.log(str.slice(4, 1));//
console.log(str.substring(1));//
console.log(str.substring(1, 5));//
console.log(str.substring(-1));//
console.log(str.substring(1, 4));//
console.log(str.substring(4, 1));//
 */
//indexOfメソッドとsliceメソッドの組み合わせ
const url = "https//www.example.com?param1";
const indecOfUrl = url.indexOf("?");
const queryString = url.slice(indecOfUrl);
console.log(queryString);