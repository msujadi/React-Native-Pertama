import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, SetisShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetisShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {isShow && <FlexBox />}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};
//cara panggil function #1

// function App(){
// cara panggil function
// }

export default App;
