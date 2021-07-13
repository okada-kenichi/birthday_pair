# 環境構築方法
- まず最初は作業エリアに移動して
- リモートブランチを全てpull
`git pull`

- 作業ブランチを当該ブランチに変更
`git checkout topic-vite-initialize`

- プラグインや環境をインストールする（最初の一回目やプラグインを新たにインストールした場合)
`npm install`

-  環境が整ったらローカルで立ち上げ
`npm run dev`

- 特に重複がなければhttp://localhost:3000/でウォッチできます。
