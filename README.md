# MyKONAN Auto Backup Tool

MyKONANで強制ログアウトされた場合に，入力内容を自動保存・復元するChrome拡張機能です．

## ※※※ NOTE ※※※
- 著作権が怪しいので，使わない方がいいかも
- 拡張機能の使用によって生じたいかなる問題に対しても，作成者は責任を負いません．ご使用は自己責任でどうぞ
- バックアップのため，入力内容をwindow.localStorageに平文で保存しています．<br>localStorageの中身はブラウザの開発者モードを使えば誰でも見えるので，共用PCでは使わない方が良いかもしれません

## Usage
1. Chromeブラウザをインストール
1. Chromeブラウザで ```chrome://extensions/``` にアクセス
1. 右上のデベロッパーモードをONにする
1. 左上の「パッケージ化されていない拡張機能を読み込む」から，このレポジトリの[`  src/  `](src/)を読み込み
1. この状態でMyKONANを使うと，自動でバックアップされます．
1. 表示内容を復元したい場合は，MyKONANのタブがアクティブな状態で右クリック→「入力内容を復元する」を選択


## References
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/mv3/)
- [MDN JavaScript Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript)
