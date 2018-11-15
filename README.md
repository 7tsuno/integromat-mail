# Integroumat Mail

## What is this ?

Reactを使ったIntegroumatに連携するメールフォームのサンプルです。
[Integromatを使って無料のメールフォームを作る](https://qiita.com/7tsuno/items/7205970d9b8ef79d7f56)

## How to use ?

cloneする。

```
git clone https://github.com/7tsuno/integromat-mail
```

npm i する。

```
npm i
```

assets/components/form.jsのL4を自分で設定したWebhookのアドレスにする。

```js
const webhookURL = 'https://xxx';
```

起動する。

```
npm start
```
