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
/* const url = "https//www.example.com?param1";
const indecOfUrl = url.indexOf("?");
const queryString = url.slice(indecOfUrl);
console.log(queryString);
 */
//文字列の検索
// 文字列の検索方法として、大きく分けて文字列による検索と正規表現による検索があります。
/*
・マッチした箇所のインデックスを取得
・マッチした文字列の取得
・マッチしたかどうかの真偽値を取得
 */
//文字列によるインデックスの取得
// StringのindexOfメソッドとlastIndexOfメソッドは、指定した文字列で検索し、その文字列が最初に現れたインデックスを返します。 
/*
・文字列.indexOf("検索文字列"): 先頭から検索し、指定された文字列が最初に現れたインデックスを返す
・文字列.lastIndexOf("検索文字列"): 末尾から検索し、指定された文字列が最初に現れたインデックスを返す
 */
/* const str = "にわにわにわにわとりがいる";
// "にわ"の先頭のインデックスを返すため 0 となる
console.log(str.indexOf("にわ"));
// lastIndexOfは末尾から検索しインデックスを返す- "にわにはにわ**にわ**とりがいる"
console.log(str.lastIndexOf("にわ"));
// 指定した文字列が見つからない場合は -1 を返す
console.log(str.indexOf("未知のキーワード")); // => -1
 */
//文字列にマッチした文字列の取得
/* const str =  "JavaScript";
const serch = "Script";
const index = str.indexOf(serch);
if (index !== -1) {
  console.log(`${serch}が見つかりました`);
} else {
  console.log(`${searchWord}は見つかりませんでした`);
}
 */
//真偽値の取得
/*
・String.prototype.startsWith(検索文字列)[ES2015]: 検索文字列が先頭にあるかの真偽値を返す
・String.prototype.endsWith(検索文字列)[ES2015]: 検索文字列が末尾にあるかの真偽値を返す
・String.prototype.includes(検索文字列)[ES2015]: 検索文字列を含むかの真偽値を返す
 */
/* const str = "にわにわにわにわとりがいる";
console.log(str.startsWith("にわ"));
console.log(str.startsWith("いる"));
console.log(str.endsWith("にわ"));
console.log(str.endsWith("いる"));
console.log(str.includes("にわ"));
console.log(str.includes("いる"));
 */
//正規表現オブジェクト
// 文字列による検索では、固定の文字列にマッチするものしか検索できません。 一方で正規表現による検索では、あるパターン（規則性）にマッチするという柔軟な検索ができます。次の文字は特殊文字と呼ばれ、特別な意味を持ちます。特殊文字として解釈されないように入力する場合には\（バックスラッシュ）でエスケープする必要があります。
//\ ^ $ . * + ? ( ) [ ] { } |
/* const patternA = /パターン/フラグ;
// `RegExp`コンストラクタで正規表現オブジェクトを作成
const patternB = new RegExp("パターン文字列","フラグ");
正規表現リテラルは、/と/のリテラル内に正規表現のパターンを書くことで、正規表現オブジェクトを作成できます。
次のコードでは、+という1回以上の繰り返しを意味する特殊文字を使い、aが1回以上連続する文字列にマッチする正規表現オブジェクトを作成しています。
const pattern = /a+/;
 */
// 次のコードでは、数字が3つ連続しているかを検索し、該当した箇所のインデックスを返しています。 \dは、1文字の数字（0から9）にマッチする特殊文字です。
/* const str = "ABC123EFG";
const searchPattern = /\d{3}/;
console.log(str.search(searchPattern));
 */

//マッチした文字列の取得
/* // まずは、マッチした文字列を取得するStringのmatchメソッドから見ていきます。 matchメソッドは、正規表現の/パターン/が"文字列"にマッチすると、マッチした文字列に関する情報を返すメソッドです。
"文字列".match(/パターン/);
console.log("文字列".match(/マッチしないパターン/));
 */
///[a-zA-Z]+/という正規表現はaからZのどれかの文字が1つ以上連続しているものにマッチします。
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
const results = str.match(alphabetsPattern);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
// 検索対象となった文字列全体
console.log(results.input);
 */
// matchメソッドは正規表現のgフラグありのパターンで検索した場合、マッチしたすべての文字列を含んだ配列を返します。
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
const results = str.match(alphabetsPattern);
console.log(results.length);
console.log(results[0]);
console.log(results[1]);
//追加されない↓
console.log(results.index);
console.log(results.input);
 */
//matchAllメソッドでアルファベットにマッチする結果のIteratorオブジェクトを取得しています。 
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
// matchAllはIteratorを返す
const matchesIterator = str.matchAll(alphabetsPattern);
for (const match of matchesIterator) {
  // マッチした要素ごとの情報を含んでいる
  console.log(`match:${match[0]}, index:${match.index}, input:${match.input}`);
}
*/

  //マッチした文字列の一部を取得
/* const [マッチした全体の文字列, キャプチャ1, キャプチャ2] = 文字列.match(/パターン(キャプチャ1)と(キャプチャ2)/);
 */
/* const pattern = /ECMAScript (\d+)/;
// 返り値は0番目がマッチした全体、1番目がキャプチャの1番目というように対応している
const [all, capture1] = "ECMAScript 6".match(pattern);
console.log(all);
console.log(capture1);
 */

// "ES(数字+)"にマッチするが、欲しい文字列は数字の部分のみ
/* const pattern = /ES(\d+)/g;
const matchesIterator = "ES2015,ES2016,ES2017".matchAll(pattern);
for (const match of matchesIterator) {
  console.log(`match:"${match[0]}", capture1:${match[1]}, index:${match.index}, input:${match.input}`);
}
 */

//RegExp.prototype.execでのString.prototype.matchAll
/* RegExpのexecメソッドは、引数に文字列を受け取るメソッドです。
/pattern/.exec("文字列");
 */
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
// gフラグなしでは、最初の結果のみを持つ配列を返す
const results = alphabetsPattern.exec(str);
console.log(results.length); // => 1
console.log(results[0]); // => "ABC"
// マッチした文字列の先頭のインデックス
console.log(results.index); // => 0
// 検索対象となった文字列全体
console.log(results.input); // => "ABC あいう DE えお"
 */
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
// まだ一度も検索していないので、lastIndexは0となり先頭から検索が開始される
console.log(alphabetsPattern.lastIndex); // => 0
// gフラグありでも、一回目の結果は同じだが、`lastIndex`プロパティが更新される
const result1 = alphabetsPattern.exec(str);
console.log(result1[0]); // => "ABC"
console.log(alphabetsPattern.lastIndex); // => 3
// 2回目の検索が、`lastIndex`の値のインデックスから開始される
const result2 = alphabetsPattern.exec(str);
console.log(result2[0]); // => "DE"
console.log(alphabetsPattern.lastIndex); // => 10
// 検索結果が見つからない場合はnullを返し、`lastIndex`プロパティは0にリセットされる
const result3 = alphabetsPattern.exec(str);
console.log(result3); // => null
console.log(alphabetsPattern.lastIndex); // => 0
 */
/* const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern.exec(str)) {
    // RegExpの`exec`メソッドの返り値は`index`プロパティなどを含む特殊な配列
    console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern.lastIndex}`);
}
 */
//真偽値を取得
/*
・StringのstartsWith相当: /^パターン/.test(文字列)
・StringのendsWith相当: /パターン$/.test(文字列)
・Stringのincludes相当: /パターン/.test(文字列)
 */
/* // 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// ^ - 検索文字列が先頭ならtrue
console.log(/^にわ/.test(str)); // => true
console.log(/^いる/.test(str)); // => false
// $ - 検索文字列が末尾ならtrue
console.log(/にわ$/.test(str)); // => false
console.log(/いる$/.test(str)); // => true
// 検索文字列が含まれるならtrue
console.log(/にわ/.test(str)); // => true
console.log(/いる/.test(str)); // => true
 */

// 文字列の置換/削除
// 文字列の一部を置換したり削除するにはStringのreplaceメソッドを利用します。
/*
文字列.replace("検索文字列", "置換文字列");
文字列.replace(/パターン/, "置換文字列");
*/
/* const str = "文字列";
// "文字"を""（空文字列）へ置換することで"削除"を表現
const newStr = str.replace("文字", "");
console.log(newStr);
 */
/* // 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// 文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str.replace(/にわ/, "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"
 */
// 文字列から検索文字列にマッチするものをすべて置換する場合には、ES2021で追加されたStringのreplaceAllメソッドも利用できます。 
// 検索対象となる文字列
/* const str = "???";
// replaceメソッドに文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str.replace("?", "!")); // => "!??"
// replaceAllメソッドに文字列を指定した場合は、一致したものがすべて置換される
console.log(str.replaceAll("?", "!")); // => "!!!"
// replaceメソッドの場合は、正規表現の特殊文字はエスケープが必要となる
console.log(str.replace(/\?/g, "!")); // => "!!!"
// replaceAllメソッドにも正規表現を渡せるが、この場合はエスケープが必要となるためreplaceと同じ
console.log(str.replaceAll(/\?/g, "!")); // => "!!!"
 */
// replaceメソッドとreplaceAllメソッドでは、キャプチャした文字列を利用して複雑な置換処理もできます。
/*
const 置換した結果の文字列 = 文字列.replace(/(パターン)/, (all, ...captures) => {
    return 置換したい文字列;
});
 */
/* function toDateJa(dateString) {
  // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
  return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
      // `all`には、マッチした文字列全体が入っているが今回は利用しない
      // `all`が次の返す値で置換されるイメージ
      return `${year}年${month}月${day}日`;
  });
}
// マッチしない文字列の場合は、そのままの文字列が返る
console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// マッチした場合は置換した結果を返す
console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"
 */
// タグつきテンプレート関数
// JavaScriptでは、テンプレートとなる文字列に対して一部分だけを変更する処理を行う方法として、タグつきテンプレート関数があります。 タグつきテンプレート関数とは、関数`テンプレート` という形式で記述する関数とテンプレートリテラルを合わせた表現です。 
/* function tag(str) {
  // 引数`str`にはただの文字列が渡ってくる
  console.log(str);
}
tag(`template ${0}, ${1}`);
 */
/*
// 呼び出し方によって受け取る引数の形式が変わる
function tag(strings, ...values) {
  // stringsは文字列のパーツが${}で区切られた配列となる
  console.log(strings); // => ["template "," literal ",""]
  // valuesには${}の評価値が順番に入る
  console.log(values); // => [0, 1]
}
// ()をつけずにテンプレートを呼び出す
tag`template ${0} literal ${1}`;
 */
// 次のコードでは、テンプレート中の変数をURLエスケープしてから埋め込むタグつきテンプレート関数を定義しています。 encodeURIComponent関数は引数の値をURLエスケープする関数です。
/* // 変数をURLエスケープするタグ関数
function escapeURL(strings, ...values) {
  return strings.reduce((result, str, i) => {
      return result + encodeURIComponent(values[i - 1]) + str;
  });
}

const input = "A&B";
// escapeURLタグ関数を使ったタグつきテンプレート
const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
console.log(escapedURL);
 */