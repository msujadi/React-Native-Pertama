import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

function PropsDinamis() {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal>
          <Story
            judul="Youtube Channel"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c0.247.640.640a/s150x150/242927405_268834695099160_7142133557951982015_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ueM8SVEDxGAAX-PIkyd&edm=AGW0Xe4BAAAA&ccb=7-4&oh=55325469cd430eb94e8157ece9d96618&oe=615FBD3A&_nc_sid=acd11b"
          />
          <Story
            judul="Kelas Online"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e35/c206.19.312.312a/s150x150/141572982_873998913435551_4178504291305262333_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=mDFNJtiHLUYAX_mL7q3&edm=AGW0Xe4BAAAA&ccb=7-4&oh=d8263f52aa180158884e4adc75c51b06&oe=615FA42B&_nc_sid=acd11b"
          />
          <Story
            judul="Kabayan Coding"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/s150x150/49858776_388962385246498_6970981250919086343_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_ohc=gs1G_WVIWT0AX8KH4fM&tn=01gAvtHadGpeV1nZ&edm=AGW0Xe4BAAAA&ccb=7-4&oh=2655ecc340a6646716773ab9ed3f9fbc&oe=6164E890&_nc_sid=acd11b"
          />
          <Story
            judul="Shoot"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.322.828.828a/s150x150/240646413_203117078530201_7301775963079578867_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=SsZzTX8QGtkAX-P3Cfp&edm=AGW0Xe4BAAAA&ccb=7-4&oh=b42d7968d7b74eeef55c1d5f4765e3aa&oe=615F9C8E&_nc_sid=acd11b"
          />
          <Story
            judul="Food"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.12442-15/e35/c234.567.578.578a/s150x150/101382900_142164840737752_9039503759332908435_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1_4Amf-NxaEAX94blrA&edm=AGW0Xe4BAAAA&ccb=7-4&oh=66cc8bd52c1fd40bb4e9e26adf5e5b0c&oe=615FA3ED&_nc_sid=acd11b"
          />
          <Story
            judul="Tamiya"
            gambar="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e35/c63.324.306.306a/s150x150/228999557_779238592742025_5942552361127758841_n.jpg?_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=cq8Ik2X-NBwAX9XCOFf&tn=01gAvtHadGpeV1nZ&edm=AGW0Xe4BAAAA&ccb=7-4&oh=64e4c9d94e0e0b127034f653415b6d7f&oe=615F6F43&_nc_sid=acd11b"
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default PropsDinamis;

const styles = StyleSheet.create({});
