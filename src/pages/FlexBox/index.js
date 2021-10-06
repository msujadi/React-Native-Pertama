import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('===> component did update');
//   }

//   componentWillUnmount() {
//     console.log('===> component will unmount');
//   }

//   render() {
//     console.log('===> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             //alignItems: 'flex-end',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{
//               uri: 'https://yt3.ggpht.com/ytc/AKedOLTIYqiHDIegcKfeUw4oEruCdtndwoH7oAXV5feJ=s48-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Dragonarc Gaming
//             </Text>
//             <Text>{this.state.subscriber} subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setsubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setsubscriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  //   useEffect(() => {
  //     console.log('did update');
  //     setTimeout(() => {
  //       setsubscriber(400);
  //     }, 2000);
  //   }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          //alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLTIYqiHDIegcKfeUw4oEruCdtndwoH7oAXV5feJ=s48-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Dragonarc Gaming
          </Text>
          <Text>{subscriber} subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
