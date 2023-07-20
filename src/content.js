"use strict";

console.log("cn: load");
const lStorage = window.localStorage;
const MAX_BACKUP_NUM = 30;  // 直近30件
const backupKeyPrefix = "PLEASE_HELP_ME";
let backupKeyId = 0;
if ("lastKeyId" in lStorage) {
  backupKeyId = (parseInt(lStorage.getItem("lastKeyId")) + 1) % MAX_BACKUP_NUM;
}


window.onload = () => {

  // SEND Message to './background.js'
  // init content.js Id
  // hand shake 的な
  chrome.runtime.sendMessage({ from: "contentJS" });


  // GET Message from './background.js'
  // show recovery data
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.from == "backgroundJS") {
      const downloadDataJsonObj = {};
      Object.keys(lStorage).forEach((recoveryKey) => {
        if (recoveryKey.startsWith(backupKeyPrefix)) {
          downloadDataJsonObj[recoveryKey] = JSON.parse(lStorage.getItem(recoveryKey));
          console.log(recoveryKey, lStorage.getItem(recoveryKey));
        }
      });
      console.log("cn: download data:", downloadDataJsonObj);
      if (window.confirm("復元したデータをJSONファイルでダウンロードしますか？")) {
        const downloadDataJsonStr = JSON.stringify(downloadDataJsonObj, null, 2);
        const aEle = document.createElement("a");
        const fileObj = new Blob(
          [downloadDataJsonStr], { type: "application/json" }
        );
        aEle.href = URL.createObjectURL(fileObj);
        aEle.download = "backup.json";
        aEle.click();
      } else {
        window.alert("復元したデータは，開発者ツールのコンソールから見れます");
      }
    }
  });


  //handle click event
  // TODO: さすがに全部のクリックに反応してたらうざい
  // 必要なクリックを見極めたい．
  document.addEventListener("click", function backup() {
    const jsonData = collectData();  // 現在入力途中のデータを取得
    console.log("cn: json:", jsonData);
    if (jsonData === "[]") {
      console.log("cn: data is empty");
      return;
    }
    const backupKey = backupKeyPrefix + ":" + backupKeyId.toString();
    lStorage.setItem("lastKeyId", backupKeyId.toString());
    backupKeyId += 1;
    backupKeyId %= MAX_BACKUP_NUM;
    window.localStorage.setItem(
      // (key, value)
      backupKey, jsonData
    );
    return;
  });
};
