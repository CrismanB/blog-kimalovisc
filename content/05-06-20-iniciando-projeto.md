---
title: "Iniciando nosso projeto! 💻"
path: "/post/iniciando-projeto"
date: 2020-06-05T03:00:00.000Z
---

### O que iremos fazer neste projeto???

> Neste projeto faremos um aplicativo mobile de lista de compras com React-Native. Nele usaremos vários conceitos do React como por exemplo componentização, hooks, acessibilidade etc... Usaremos um banco SQLite para salvar nossos registros. Enjoy! 👊🏾

### Iniciando o projeto.

> Usando o comando fornecido pelo **React-Native** criaremos nosso projeto. Basta usar o comando abaixo em seu terminal para criar o projeto.

`npx react-native init cart --template react-native-template-typescript`

> Após o término da instalação do nosso projeto abra no seu editor e execute para rodar o aplicativo em seu [**emulador**](https://react-native.rocketseat.dev/). Esse processo pode demorar um pouco mas fique tranquilo que vai executar o projeto.

`yarn ios`

> ou

`yarn android`

> Com seu projeto rodando e aberto no editor, crie uma pasta **src** na raiz do projeto com um arquivo **App.tsx**. Faremos um "Hello World" para configurar a estrutura inicial do projeto com um componente funcional.

```tsx
import React from "react"

import { Text } from "react-native"

const App: React.FC = () => {
  return <Text>Hello World</Text>
}

export default App
```

#### Configurando a StatusBar

> Para configurar a StatusBar basta importar o componente **StatusBar** dentro da biblioteca **react-native** e inserir dentro da aplicação como componente. Dentro do componente tem algumas propriedades que podemos configurar, como por exemplo barStyle que altera as cores das fontes. Abaixo segue trecho que define o estilo da StatusBar como **light-content** que deixa as cores claras.

```tsx
import React from "react"

import { View, Text, StatusBar } from "react-native"

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#333",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello World</Text>
      </View>
    </>
  )
}

export default App
```

> No próximo post criaremos o layout da primeira página da nossa aplicação!!!
