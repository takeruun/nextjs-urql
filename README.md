# Next.js + Urql アプリケーション

## 導入ライブラリ
- next
- graphql
- @urql/next
  - [ドキュメント](https://formidable.com/open-source/urql/docs/)
  
## 立ち上げ
1. ライブラリインストール
```sh
yarn
```

2.  スタート
```sh
yarn dev
```  

# コメント
## 同ページだと query 実行される
[reexecute実行](/app/csr/page.tsx#L75) をコメントアウト状態でも、`ITEM_LIST_QUERY`は実行される模様

https://github.com/takeruun/nextjs-urql/assets/48900966/9652d22e-7d56-4455-9b5a-db3ca65abc90

## 同ページは実行されない
リロードすると `ITEM_LIST_QUERY`実行されてないのにも関わらず、データは書き変わっている。

キャッシュは更新されているも模様。

https://github.com/takeruun/nextjs-urql/assets/48900966/1da07e53-4873-46ab-9e31-b4840c8684ba

