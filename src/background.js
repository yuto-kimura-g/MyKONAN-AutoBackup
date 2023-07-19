"use strict";


/*
名前の通りbackgroundで動作するので，console.logはメインページの開発者コンソールに表示されない
拡張機能の設定タブからじゃないと見えない

また，windowオブジェクトも使えない．
windowオブジェクトが必要な操作（window.storageとか）は，拡張機能越しにcontent.jsとやりとりする

background.jsでは，右クリックメニューの追加と，クリック判定を行う
*/


console.log("bg: load");
let contentJSId = null;

// init
// add right click menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "recovery",
    "title": "入力内容を復元する",
    "contexts": ["all"]
  });
});


// GET Message from './content.js'
// init content.js Id
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.from == "contentJS") {
    contentJSId = sender.tab.id;
  }
});


// SEND Message to './content.js'
// handle right click
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "recovery") {
    if (contentJSId) {
      chrome.tabs.sendMessage(
        // (dest, obj)
        contentJSId, { from: "backgroundJS" }
      );
    } else {
      console.log("bg: contentJSId === null", contentJSId);
    }
  }
});
