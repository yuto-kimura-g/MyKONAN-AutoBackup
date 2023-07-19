# MEMO

`manifest.json`にコメントアウトでメモをしたいんだけど，エラーが出て怒られるので，ここにメモを残す

以下一部抜粋
```json
{
  "manifest_version": 3,  // 最新版
  "version": "1.0.0.0",  // 世界公開（ストアに出す）なら，ちゃんとしないとダメらしい
  "permissions": [
    "contextMenus"  // 右クリックメニュー
  ],
  "icons": {
    "128": "./logo.png"  // 拡張機能一覧で表示されるアイコン
  },
  "content_scripts": [
    {
      "matches": [
        // このURLにマッチする時のみ動作する
        "https://spoon.adm.konan-u.ac.jp/uprx/up/*"
      ],
      "js": [
        // 上から順に読み込まれる
        // content.jsでcore.js, jquery.jsを使うので，それらを先に読み込む
        "./jquery.js",
        "./core.js",  // MyKONANからパクってきた．個人利用ならグレーゾーン？
        "./content.js"
      ],
    }
  ],
  "background": {
    // 右クリックメニューのために必要
    "service_worker": "./background.js"
  }
}
```
