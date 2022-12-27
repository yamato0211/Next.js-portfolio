---
title: ハックツハッカソン(メガロカップ)で最優秀賞をとりました！
date: 2022 December
thumbnail: /images/portfolioImage10.png
---

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/decbfc3a-56ab-17b1-dd5f-ad8d901155b2.png)

# メガロカップで最優秀賞をとりました。

ハックツさんの記事です。

https://hackz.team/news/7kqA7Be3Cf7Cs7wsuPIqrx

今回発表で使った記事になります。

https://topaz.dev/projects/8ec1a7f3e9db6bf2e2f7

今回は、動画配信サービスを作りたいということと、Rustでフロントエンドもバックエンドも全部構築しようぜ！ということでRustを死に物狂いで書きました。ほぼ寝れなかったですww

## 使用技術

- Rust
- Rust
- Rust

作成したソースコードです。
[https://github.com/yamato0211/megalo-use-std-mamachari](https://github.com/yamato0211/megalo-use-std-mamachari)

とボケは置いといて、まじめに使用技術の説明します。
Rustは前提として

- Actix-web(webフレームワーク,API構築)
- Deisel(Orm)
- Yew (フロントフレームワーク,ウェブアセンブリ)
- Docker
- Postgresql
- Nginx

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2086809/6f24a6f8-e70e-aa3d-2a41-a2a052b3e234.png)

# 感想
いやーやっぱり慣れない言語は難しいですね！特に、Rustは今まで触ってきた言語より難しいなと感じました。特に型の不一致や所有権周りでたくさん怒られました。ただRustはコンパイラが優秀でどこがどうよくなくて、どういった修正を行うべきかをある程度教えてくれます。Cargo最高!! 今回のプロダクトはまだ未完成なのでもっと磨きをかけていきたいと思います。