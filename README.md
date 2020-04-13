# 概要

- LaravelフレームワークでVue.jsを利用してSPAを実装してみる<br>
⇒ 画面遷移の時ページをリフレッシュせず表示できるようにする
- Vue.jsのライブラリVue-routerを利用すること（https://router.vuejs.org/）
- UIはbootstrap-vueで構成する

## 必要なパッケージ

※　下記パッケージをインストールし、コマンドをaliasとして指定すること
<ul>
    <li><a href="https://www.php.net/">php</a></li>
    <li><a href="https://getcomposer.org/download/">composer</a></li>
    <li><a href="https://www.npmjs.com/">npm</a></li>
</ul>


## 起動方法

- プロジェクトをクローンしてダウンロードする
- プロジェクトルートフォルダーで以下のコマンドを叩く
```
# JSライブラリインストール
$ npm install
$ npm run dev

# PHPパッケージインストール
$ composer update

# 環境変数ファイル作成
$ cp .env.example .env

# アプリのアクセスキーを作成
$ php artisan key:generate

# サーバー起動
$ php artisan serve
```

- <a href="http://localhost:8000">localhost</a>にアクセスして確認
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F208640%2F47e846e3-c4b4-d197-4497-0fbd7873b3bd.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=deaced760b555d6dcbc0710b6f1ee450">
