//◆◆◆◆◆◆関数と宣言◆◆◆◆◆◆
//関数はある一連の処理（文の集まり）を一つの処理としてまとめる機能
//関数宣言
/*
function 関数名(仮引数1, 仮引数2) {
  //関数が呼び出されたときの処理を記入
  //......
  return 関数の戻り値;
}
//関数呼び出し
const 関数の結果 = 関数名(引数1, 引数2);
console.log(関数の結果);

関数名-任意の名前（命名ルールは変数と一緒）
仮引数-関数の呼び出し時に渡された値が入る変数。複数ある場合は,（カンマ）で区切る
関数の戻り値-関数を呼び出したときに、呼び出し元へ返される値
*/
/*
function double(num) {
  return num * 2;
}
console.log(double(10));

function fn() {
  //何も指定がない場合はundefined
  return;
  //既にリターンされているため、return以降は実行されない
}

console.log(fn());

function array(x, y) {
  return [x, y];
}
console.log(array(1, 2));
console.log(array(1));//値の入っていない部分はundefinedになる。

function echo(x = "デフォルト値") {
  return x;
}

console.log(echo(1));
console.log(echo());//引数に値がは良いていないとデフォルトで設定した値が入る
X

//or演算子を使ってデフォルト値を指定できる
function addPrefix(text, prefix) {
  const pre = prefix || "デフォルト";
  return pre + text;
}

console.log(addPrefix("文字列"));//prefixに値が入っていないとデフォルト値が表示される
console.log(addPrefix("文字列", "オリジナル"));
※OR演算子を使うと、falsyな値が廃板場合デフォルト値が返る

function addPrefix(text, prefix = "デフォルト値") {
  return prefix + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));//OR演算子ではなく引数でデフォルト値を設定することでfalsyな値は渡らない
console.log(addPrefix("文字列", "オリジナル"));

//■可変長引数 関数の引数の数が固定ではなく、任意の個数を受け取りたいとき
const max = Math.max(1, 5, 10, 20);//Math.maxは0以上の数値で一番大きい値を返す
console.log(max);

//■Rest parameters 残余引数(...関数名) 配列となる
function fn(...array) {
  //arrayは引数の値が順番に入った配列
  console.log(array);
}
fn("a", "b", "c");

function fn(arg, ...restArgs) {
  console.log(arg);//引数の1番目が入る
  console.log(restArgs);//それ以降が入る
}
fn("a", "b", "c");

//配列を展開して関数の引数に引き渡すspread構文がある
function fn(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

const array = [1, 2, 3];
//Spread構文で配列を引数に展開して関数を呼びだす
fn(...array);

function fn() {
  //argumentsは引数で渡された内容を配列のように受け取ることができる
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

fn("a", "b", "c");

//■関数の引数と分割代入
//オブジェクトや配列からプロパティを取り出し、変数として再定義することができる
function printUserId(user) {
  console.log(user.id);//42
}
const user = { //再定義
  id: 42
};
printUserId(user);

function printUserId({ id }) {
  console.log(id);
}
const user = {
  id: 42
};
printUserId(user);

const user = {
  id: 42
};
const { id } = user;//userのプロパティを代入
function printUserId({ id }) {
  console.log(id);
}
printUserId(user);

//分割代入は配列でもできる
function print([first, second]) {
  console.log(first);
  console.log(second);
}
const array = [1, 2];
print(array);

//関数は変数に代入したり引数として引き渡すことができる。
function fn() {
  console.log("fnが呼び出されます");
}
const myFunc = fn;
myFunc();

//関数式は、関数を値として変数へ代入している式のこと
const 関数名 = function() {
  //関数を呼び出したときの処理;
  //......
  return 関数の返り値;
};

//factorialは関数の外から呼び出せる名前
//innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  return n * innerFact(n - 1);
};
console.log(factorial(3));

//アロー関数
const 関数名 = () => {
  //関数を呼び出しときの処理
  return 関数の返す値;
}
・関数の仮引数が1つのときは()を省略できる
・関数の処理が1つの式である場合に、ブロックとreturn文を省略できる
const fnA = () => {仮引数がないとき}
const fnB = x => {仮引数が一つの時は()を省略できる}
const fnC = (x, y) => {仮引数が複数の時}

const mulA = x => { return x * x; };//ブロックの中でreturn
const mulB = x => x * x;//1行のみの場合はreturnとブロックを省略できる

const array = [1, 2, 3];
const doubleArray = array.map(function (value) {
  return value * 2;
});
console.log(doubleArray);

//functionとブロックを省略できる
const array = [1, 2, 3];
const doubleArray = array.map(value => value * 3);
console.log(doubleArray);
 */