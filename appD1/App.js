import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


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

  state = { index: 0 }

  nextImage(event){
    newIndex = this.state.index + 1 == IMAGES.length ? 0 : this.state.index + 1;
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
