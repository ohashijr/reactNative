# React Native

Material de apoio para o curso inicial de React Native - LCA/UFRA

# Por que React Native?

# Ambientes de desenvolvimento

## CLI

## Expo

## Create-react-native-app

ref https://github.com/react-community/create-react-native-app

# Instalação do create-react-native-app

1. Exercutar na shell os seguintes comandos:
```shell
$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start
```

2. Baixar no smartphone a app "Expo".

3. Fazer a leitura pelo app "Expo" do QR code gerado.

# App

O objetivo é fazer um app simples que navega por um conjunto de fotos.

## No arquivo App.js, inicial:
```js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My first App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Criando um array de imagens, nada vai mudar visualmente na App.
```js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const IMAGES = [
    {
        uri: "https://i.imgur.com/mxgtWKt.jpg",
        label: "Cat on a blue blanket"
    },
    {
        uri: "https://i.imgur.com/XCRnNWn.jpg",
        label: "A cat toy"
    },
    {
        uri: "https://i.imgur.com/dqQX1K0.jpg",
        label: "A close up of a dog"
    },
    {
        uri: "https://i.imgur.com/nZXbSbh.jpg",
        label: "Sheep next to a cat"
    },
    {
        uri: "https://i.imgur.com/mXCjefR.jpg",
        label: "Cat laying on the grass"
    },
    {
        uri: "https://i.imgur.com/AGyxRcc.jpg",
        label: "Bird sitting on a railing"
    }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My first App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Adicionando uma imagem:

1. É necessário fazer o import do componente "Image" do react-native.
2. Na utilização do componente Image, por se tratar de uma imagem que vem de uma
url é necessário passar as configurações de width e height, caso contrário a imagem
não será renderizada.
3. Neste exemplo, a image carregada está fixa a nivel de código "IMAGES[0]", a
imagem do primeiro index do array de imagens (IMAGES) definido previamente.

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const IMAGES = [
  ...
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My first App!</Text>
        <Image source={{uri: IMAGES[0].uri}} style={{ width: 200, height: 200 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...
});
```
## Ajustando o style:
Colocamos mais duas Views com "flex: 1", uma em cima e outra em baixo da Image,
e essa possui "flex: 2". O que significa que ela ocupa o mesmo espaço que as duas
views somadas.

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const IMAGES = [
  ...
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <Image source={{uri: IMAGES[0].uri}} style={styles.image} />
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    width: 320,
  },
});
```

## Adicionando label

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const IMAGES = [
  ...
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <Image source={{uri: IMAGES[0].uri}} style={styles.image} >
          <Text>{IMAGES[0].label}</Text>
        </Image>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...
});

```

## Ajustando estilo do Label da Imagem

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const IMAGES = [
  ...
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <Image source={{uri: IMAGES[0].uri}} style={styles.image} >
          <Text style={styles.imageLabel}>{IMAGES[0].label}</Text>
        </Image>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320
  },
});
```

## Adicionando ação de click

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


const IMAGES = [
  ...
];

export default class App extends Component {

  nextImage(event){
    console.log("next image");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <TouchableHighlight
          onPress={this.nextImage.bind(this)}
          style={styles.image}
        >
          <Image source={{uri: IMAGES[0].uri}} style={styles.image} >
            <Text style={styles.imageLabel}>{IMAGES[0].label}</Text>
          </Image>
        </TouchableHighlight>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...
});

```

## Adicionando lógica para mudar as imagens de acordo com o click

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


const IMAGES = [
  ...
];

export default class App extends Component {

  state = { index: 0 }

  nextImage(event){
    newIndex = (this.state.index + 1) == IMAGES.length ? 0 : this.state.index + 1;
    this.setState({ index: newIndex});
    console.log("next image: " + newIndex);
  }

  render() {
    const index = this.state.index;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <TouchableHighlight
          onPress={this.nextImage.bind(this)}
          style={styles.image}
        >
          <Image source={{uri: IMAGES[index].uri}} style={styles.image} >
            <Text style={styles.imageLabel}>{IMAGES[index].label}</Text>
          </Image>
        </TouchableHighlight>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...
});

```

https://school.shoutem.com/lectures/build-react-native-mobile-app-tutorial/
