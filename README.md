# birthday_pair
# 環境構築方法
- まず最初は作業エリアに移動して
- リモートブランチを全てpull
`git pull`

- 作業ブランチを当該ブランチに変更
`git checkout topic-vite-js`

- プラグインや環境をインストールする（最初の一回目やプラグインを新たにインストールした場合)
`npm install`

-  環境が整ったらローカルで立ち上げ
`npm run dev`

- 特に重複がなければhttp://localhost:3000/でウォッチできます。


-  静的サイトの出力は
`npm run build`
`/dist`ディレクトリ配下にサイト出力します。