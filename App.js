import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import macbook from './brimstone.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};
//cara panggil function #1

// function App(){
// cara panggil function
// }

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={macbook} style={{width: 188, height: 107}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 14,
            color: '#F2994A',
            fontWeight: 'bold',
          }}>
          Rp 25.000.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

function SampleComponent() {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Prawito</Text>
      <Hudoro />
      <Text>Mila</Text>
      <Text>Azzamy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  ); //ini dari bagian belajar basic menggunakan component
}

const Hudoro = () => {
  return <Text>Hudoro Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
