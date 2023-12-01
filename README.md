## styled('div') の子要素内でタブ切り替えを実行するとタブ子要素がアンマウントされる問題
再現手順
```sh
git clone 
cd unmount-caused-by-styled-div

# npm を導入しておいてください
# $ npm --version
#   6.14.15

npm install
npm start
# ブラウザで http://localhost:3000/ 等にアクセス
# devtools のコンソールを開いた状態でタブを切り替える
```
