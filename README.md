# MyKONAN Auto Backup Tool

MyKONANで強制ログアウトされた場合に，入力内容を自動保存・復元するChrome拡張機能です．

## ※※※ NOTE ※※※
- **著作権の関係で，`src/core.js`は`gitignore`してるので，クローンしてそのままでは使えません．<br>`src/core.js`を各自実装してください**
- 拡張機能の使用によって生じたいかなる問題に対しても，作成者は責任を負いません．ご使用は自己責任でどうぞ
- バックアップのため，入力内容を`window.localStorage`に平文で保存しています．<br>`window.localStorage`の中身はブラウザの開発者モードを使えば誰でも見えるので，共用PCでは使わない方が良いかもしれません
- `window.localStorage`には容量制限があります．長すぎる入力は溢れるかも

## Usage
1. Chromeブラウザをインストール
1. Chromeブラウザで ```chrome://extensions/``` にアクセス
1. 右上のデベロッパーモードをONにする
1. 左上の「パッケージ化されていない拡張機能を読み込む」から，このレポジトリの[`  src/  `](src/)を読み込み
1. この状態でMyKONANを使うと，自動でバックアップされます．
1. 表示内容を復元したい場合は，次の操作を行う（どちらも同じ動作をします）
  - MyKONANのページ上で右クリック→「入力内容を復元する」をクリック
  - 右上の拡張機能ロゴをクリック→「入力内容を復元する」をクリック


## References
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/mv3/)
- [MDN JavaScript Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript)
