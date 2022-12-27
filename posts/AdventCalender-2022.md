---
title: アドベントカレンダーで記事を執筆しました!
date: 2022 December
thumbnail: /images/portfolioImage9.png
---

# はじめに
この記事は[C3 Advent Calendar 2022](https://qiita.com/advent-calendar/2022/c3) 17日目の記事です

今回の記事では，RustでBearer認証が行える程度の簡単なGraphQLサーバーを作成していきたいと思います。

# 使用技術

使用した主要な技術は以下の通りになっています。
- [actix-web](https://actix.rs/) (rustのwebフレームワーク)
- [juniper](https://docs.rs/juniper/latest/juniper/) (rustのgraphqlライブラリ)
- [diesel](https://diesel.rs/) (rustのorm)
- postgresql
- docker

# 動かしてみる
ソースコードは以下のリポジトリにあります。
[https://github.com/yamato0211/rust-graphql-tutorial](https://github.com/yamato0211/rust-graphql-tutorial)

参考にさせていただいた記事です。
[【Rust】GraphQL API Serverを作ってみる話。(1/?) ～導入編～](https://qiita.com/dino3616/items/a99f33488ac6a306cdb4)

※README.mdに環境構築の設定などがまだ記述できていません。申し訳ない。なるはやで書きます。

APIサーバーやDBサーバーを起動して、[http://localhost:8000/playground](http://localhost:8000/playground)にアクセスすると、、、

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/1870f775-1071-fa08-85c0-1d859cf2eda0.png)
こんな感じの画面が表示されます。ここでクエリを実行できます。

新規登録とログインの機能を実装しているので実際に行ってみます。

まずは新規登録から以下のようなMutationを投げてみます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/29190866-8d6f-4954-1f3d-71c9637f9663.png)
真ん中の三角ボタンを押すと

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/e3902dad-4f43-94e6-ad96-380bc7fd3b02.png)
登録が完了します。次にログインを行ってみます。

以下のqueryを実行してみます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/c9b71e21-8cc7-b5ad-8513-e9e5fb9c9522.png)

実行すると、

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/27be1b44-25f6-9e00-cd10-a66545ad19ed.png)
うまくログインが行われてjwtトークンが返ってきます。

他のqueryやmutationを実行するときにはAuthorizationヘッダーにこのトークン情報を入れて実行します。
試しに、すべてのユーザー情報を取得するqueryを投げてみたいと思ます。


以下のようにヘッダーも記述して以下のようなqueryを実行してみます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/0d901a85-46f4-510e-d499-777438c46432.png)

登録されたユーザーがすべてかえってきています。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/81bdca92-b6b1-3317-cccc-955f683a8c0c.png)
idを指定してユーザー情報をとってくることもできます。

# 最後に
今回はrustのactix-webとjuniperを使用して認証サーバーを作成してみました。
実行結果のみでコードについて詳しく説明ができなかったので、その他もろもろの説明も近日中に書き上げます。