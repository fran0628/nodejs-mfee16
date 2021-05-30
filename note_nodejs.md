==================================

ajax 重整也是個發出請求

同源政策 為了安全性 
same-origin police 
同源 需要同一PORT DOMAIN 

CORS 

package lock 
鎖定版本  

tree 
npm i => package.josn => i axios 
==> axios package.json
===>安裝axios依賴套件 follow-redirects

node_modules/不要推上github 因為檔案太大

.gitignore 隱藏檔
忽略清單 *.log  
要push上去github與專案小組同步

-----------下午---------------

npm
"axios" :"^0.21.1"
主版本.次版本.patch版

主版本: 很大的更新甚至可以不相容前面的版本
次版本: 更新後是需要可以相容前面的一個版本
patch版:修bug (補丁)

^: 只會執行不更改最左邊的非零數字的更新
ex: ^1.2.3 允許更新的範圍在 2.0.0
	 1.2.4
	 1.9.2
	 0.2.3 < 0.3.0 
	 
~:只更新patch	 

npm install ==> package-lock.json
npm update ==> 更新版本,並且更新 package-lock.json

npm i cowsay version 最新版本 
versions 全部版本

npm 可以私有 可以架設私人的 
可執行工具放在可執行檔

-g (global) 套件名稱:cowsay 安裝在全域(最外層)
package package-lock不會出現cowsay
全域的工具 - 幫你建立專案不用從零開始 

npx輕鬆執行本機已安裝的專案工具外(不論是全域的或是專案底下的)
還可不需安裝直接下指令直接執行
npx @vue/cli create my-vue 
透過npx這個指令偷偷幫本機下載並執行 再幫你刪除

查看路徑
npm root -g
npm root 

每個版本一個路徑 
如果nodejs版本太舊 可能無法安裝最新版的axios 
會隨著版本不同而不相容 

callback 與有無同步沒關係
但非同步大部分會用到callback
我拿到結果幫你呼叫
或是回傳結果給你 你自己決定
callback hell (波動拳)

promise是個物件 
有物件就可以串接.then.catch
有固定寫法 
兩個參數 
resolve(success) reject(fail)

pending狀態