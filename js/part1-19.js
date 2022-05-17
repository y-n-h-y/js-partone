//◆◆◆◆◆◆クラス◆◆◆◆◆◆
/* 
「クラス」と一言にいってもさまざまであるため、ここでは構造、動作、状態を定義できるものを指すことにします。 また、この章では概念を示す場合はクラスと呼び、クラスに関する構文（記述するコード）のことをclass構文と呼びます。
 */
// クラス宣言文ではclassキーワードを使い、class クラス名{ }のようにクラスの構造を定義できます。
// クラスは必ずコンストラクタを持ち、constructorという名前のメソッドとして定義します。
// [Note] クラス名は大文字ではじめる
/* class MyClass {
  constructor {
            // コンストラクタ関数の処理
        // インスタンス化されるときに自動的に呼び出される
  }
}
 */
// もうひとつの定義方法であるクラス式は、クラスを値として定義する方法です。 クラス式ではクラス名を省略できます。
/* const MyClass = class MyClass {
  constructor() {}
};

const AnonymousClass = class {
  constructor() {}
};
 */
// コンストラクタ関数内で、何も処理がない場合はコンストラクタの記述を省略できます。 省略した場合でも自動的に空のコンストラクタが定義されるため、クラスにはコンストラクタが必ず存在します。
/* class MyClassA {
  constructor() {
      // コンストラクタの処理が必要なら書く
  }
}
// コンストラクタの処理が不要な場合は省略できる
class MyClassB {
}
 */

//クラスのインスタンス化
// クラスはnew演算子でインスタンスであるオブジェクトを作成できます。 class構文で定義したクラスからインスタンスを作成することをインスタンス化と呼びます。
/* class MyClass {

}
// `MyClass`をインスタンス化する
const myClass = new MyClass();
// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();
console.log(myClass === myClassAnother)
// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass);
console.log(myClassAnother instanceof MyClass); 
 */
/* 
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
// 1. コンストラクタを`new`演算子で引数とともに呼び出す
const point = new Point(3, 4);
// 4. `Point`のインスタンスである`point`の`x`と`y`プロパティには初期化された値が入る
console.log(point.x);
console.log(point.y);
このようにクラスからインスタンスを作成するには必ずnew演算子を使います。
 */

//クラスのプロトタイプメソッドの定義
// クラスの動作はメソッドによって定義できます。 constructorメソッドは初期化時に呼ばれる特殊なメソッドですが、class構文ではクラスに対して自由にメソッドを定義できます。 このクラスに定義したメソッドは作成したインスタンスが持つ動作となります。
/* class クラス {
  メソッド() {
      // ここでの`this`はベースオブジェクトを参照
  }
}

const インスタンス = new クラス();
// メソッド呼び出しのベースオブジェクト(`this`)は`インスタンス`となる
インスタンス.メソッド();
 */
/* class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counterA.count);
console.log(counterB.count);
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment);
 */

//クラスのアクセッサプロパティの定義
// クラスに対してメソッドを定義できますが、メソッドはインスタンス名.メソッド名()のように呼び出す必要があります。 クラスでは、プロパティの参照（getter）、プロパティへの代入（setter）時に呼び出される特殊なメソッドを定義できます。 このメソッドはプロパティのように振る舞うためアクセッサプロパティと呼ばれます。
/* 
class クラス {
    // getter
    get プロパティ名() {
        return 値;
    }
    // setter
    set プロパティ名(仮引数) {
        // setterの処理
    }
}
const インスタンス = new クラス();
インスタンス.プロパティ名; // getterが呼び出される
インスタンス.プロパティ名 = 値; // setterが呼び出される
*/
/* class NumberWrapper {
  constructor(value) {
    this._value = value;
  }
  get value() {
    console.log("getter");
    return this._value;
  }
  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}
const numberWrapper = new NumberWrapper(1);
// "getter"とコンソールに表示される
console.log(numberWrapper.value);
// "setter"とコンソールに表示される
numberWrapper.value = 42;
// "getter"とコンソールに表示される
console.log(numberWrapper.value); 
 */

//Array.prototype.lengthをアクセッサプロパティで再現する
// getterやsetterを利用しないと実現が難しいものとして、Array.prototype.lengthプロパティがあります。 Arrayのlengthプロパティへ値を代入すると、そのインデックス以降の要素は自動的に削除される仕様になっています。
// 次のコードでは、配列の要素数（lengthプロパティ）を小さくすると配列の要素が削除されています。
/* const array = [1, 2, 3, 4, 5];
// 要素数を減らすと、インデックス以降の要素が削除される
array.length = 2;
console.log(array.join(", "));
// 要素数だけを増やしても、配列の中身は空要素が増えるだけ
array.length = 5;
console.log(array.join(", "));
 */
// このlengthプロパティの挙動を再現するArrayLikeクラスを実装してみます。 Arrayのlengthプロパティは、lengthプロパティへ値を代入した際に次のようなことを行っています。
/* 
・現在要素数より小さな要素数が指定された場合、その要素数を変更し、配列の末尾の要素を削除する
・現在要素数より大きな要素数が指定された場合、その要素数だけを変更し、配列の実際の要素はそのままにする
*/
class ArrayLike {
  constructor(items = []) {
    this._item = items;
  }
  get items() {
    return this._items;
  }
  get length() {
    return this._items.length;
  }
  set length(newLength) {
    const currentItemLength = this.items.length;
    // 現在要素数より小さな`newLength`が指定された場合、指定した要素数となるように末尾を削除する
    if (newLength < currentItemLength) {
      this._items = this.items.slice(0, newLength);
    } else if (newLength > currentItemLength) {
      // 現在要素数より大きな`newLength`が指定された場合、指定した要素数となるように末尾に空要素を追加する
      this._items = this.items.concat(new Array(newLength - currentItemLength));
    }
  }
}
/* 
const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// 要素数を減らすとインデックス以降の要素が削除される
arrayLike.length = 2;
console.log(arrayLike.items.join(", ")); // => "1, 2"
// 要素数を増やすと末尾に空要素が追加される
arrayLike.length = 5;
console.log(arrayLike.items.join(", "));
 */

//Publicクラスフィールド
// クラスでは、constructorメソッドの中でクラスの状態であるインスタンスのプロパティの初期化することを紹介しました。 先ほども紹介したCounterクラスでは、constructorメソッドの中でcountプロパティの初期値を0として定義しています。
/* class Counter {
  count = 0;
  increment() {
    this.count++;
  }
}
const counter = new Counter();
counter.increment();
console.log(counter.count);
 */

