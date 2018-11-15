# Integroumat Mail

![image.png](https://camo.qiitausercontent.com/269f7483554c63687fe79265a2b0531a08c2d0c9/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3135343233392f37396362313837312d343035382d626333392d376136652d3135393933343562343365652e706e67)

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
