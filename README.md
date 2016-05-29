## Writing your app

```js
//your-app.js
function principal(requisicao, resposta) {
  resposta.send("Alo, " + requisicao.path + "!");
}
```

## Building

```sh
node build.js your-app.js
```

## Running

```sh
node app.js
```

## Example

```sh
node build.js example/index.js
node app.js
```
