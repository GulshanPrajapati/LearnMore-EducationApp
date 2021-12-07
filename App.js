import React from 'react';
import {Image, StyleSheet, Text, View, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';


//------------Slider Added 
const slides = [
  {
    key: 'one',
    title: "LearnMore...",
    text: "let's Start Your Jounery",
    image: require('./images/image1.png'),
  },
  {
    key: 'two',
    title: 'Vision',
    text: 'Make students smarter more pleasant and more productive things',
    image: require('./images/image2.png'),
  },
  {
    key: 'three',
    title: 'Mission',
    text: 'Knowing the real-time applications, solving real world problems and Working on Real time Projects',
    image: require('./images/image3.png'),
  },
];


//---------------------Slider Function
export default class App extends React.Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image                            //-----------------Image Style
          source={item.image}
          style={{
            resizeMode: 'contain',       
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: '#21465b',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            fontSize: 18,
            paddingHorizontal: 30,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  //--------------------------Vector Icon Added
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-circle"
          // color="rgba(255,255,255,0.9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255,255,255,0.9)" size={24} />
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          activeDotStyle={{
            backgroundColor: '#21465b',
            width: 30,
          }}
        />
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
  buttonCircle: {
    width: 41,
    height: 41,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
