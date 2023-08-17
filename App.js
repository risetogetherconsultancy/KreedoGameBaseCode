
import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  PanResponder,
  Animated,
  View,
  
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Images from './assets/images';
import Constants from './Constant';
import TouchableSwitch from './components/TouchableSwitch';
import TouchableButton from './components/TouchableButton';
import DragnDrop from './components/DragnDrop';

const App = () => {
  
  

  const objectImage = (style) => (
    <Image style={style} source={Images.imagePlaceHolder} resizeMode='stretch' />
  );

 
  
  return (
  <View style={styles.container}> 
    <Image style={styles.backgroundImage} source={Images.background} resizeMode='stretch'></Image>
    <View style={styles.topBar}>
      <TouchableSwitch 
         status="active"
         style={styles.buttonHome}
         image="buttonHome"/>

         <TouchableSwitch 
         status="active"
         style={styles.buttonBack}
         image="buttonBack"/>
        <Image style={styles.allLevelProgress} source={Images.progressBar} resizeMode='stretch'></Image>

        <TouchableSwitch 
         status="active"
         style={styles.buttonMusic}
         image="buttonMusic"/>

        <TouchableSwitch 
         status="active"
         style={styles.buttonHint}
         image="buttonHint"/>

         <TouchableSwitch 
         status="active"
         style={styles.buttonReward}
         image="buttonRewards"/>

      </View>
      <View style={styles.main}>
      <TouchableSwitch 
         status="active"
         style={styles.buttonAudio}
         image="buttonAudio"/>
       
        {objectImage(styles.imagePlaceHolder)}
        {objectImage(styles.imagePlaceHolder1)}
        {objectImage(styles.imagePlaceHolder2)}
       
       
        <Image style={styles.refPlaceHolder} source={Images.refPlaceHolder} resizeMode='stretch'></Image>
        <Image style={styles.refPlaceHolder1} source={Images.refPlaceHolder} resizeMode='stretch'></Image>
        <Image style={styles.refPlaceHolder2} source={Images.refPlaceHolder} resizeMode='stretch'></Image>

        <Image style={styles.ballsFixed} source={Images.balls} resizeMode='stretch'></Image>
        <Image style={styles.lampsFixed} source={Images.lamps} resizeMode='stretch'></Image>
        <Image style={styles.avacadosFixed} source={Images.avacados} resizeMode='stretch'></Image>

      </View>
      
      <View style={styles.bottomBar}>
        <Image style={styles.objectPlaceHolderLevel0} source={Images.objectPlaceHolderLevel0} resizeMode='stretch'></Image>
        <Image style={styles.avacados} source={Images.avacados} resizeMode='stretch'></Image>
        <Image style={styles.balls} source={Images.balls} resizeMode='stretch'></Image>
        <Image style={styles.lamps} source={Images.lamps} resizeMode='stretch'></Image>
      {/* <Animated.View style={[this.position.getLayout()]}{...this.panResponder.panHandlers}>
      <Image style={styles.lampsdrag} source={Images.lamps} resizeMode='stretch'></Image>
      
      </Animated.View> */}
      <DragnDrop></DragnDrop>

      
      

      </View>
  </View>
  
    
  
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
   
  },
  backgroundImage:{
    position:'absolute',
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,

  },
  topBar: {
    height: 40, // this has 3 points bottom padding built in
    width: Constants.MAX_WIDTH
},
main:{
  width: Constants.MAX_WIDTH,
  height:Constants.MAX_HEIGHT-170
},
bottomBar:{
  width: Constants.MAX_WIDTH,
  height: Constants.MAX_HEIGHT-50
},
buttonHome:{
  position:'absolute',
  width:30,
  height:30,
  left:10,
  top:3
},
buttonBack:{
  position:'absolute',
  width:30,
  height:30,
  left:50,
  top:3
},
allLevelProgress:{
  position:'absolute',
  width:Constants.MAX_WIDTH/3,
  height:30,
  left:Constants.MAX_WIDTH/3,
  top:3
},
buttonMusic:{
  position:'absolute',
  width:30,
  height:30,
  right:120,
  top:3
},
buttonHint:{
  position:'absolute',
  width:30,
  height:30,
  right:80,
  top:3
},
buttonReward:{
  position:'absolute',
  width:60,
  height:30,
  right:10,
  top:3
},
buttonAudio:{
  position:'absolute',
  width:30,
  height:30,
  right:10,
  top:3
},
objectPlaceHolderLevel0:{
  position:'absolute',
  width:Constants.MAX_WIDTH,
  height:90,
},
imagePlaceHolder:{
  position:'absolute',
  width:260,
  height:155,
  left:10,
  top:30
},
imagePlaceHolder1:{
  position:'absolute',
  width:260,
  height:155,
  left:275,
  top:30
},
imagePlaceHolder2:{
  position:'absolute',
  width:260,
  height:155,
  right:5,
  top:30
},
refPlaceHolder:{
  position:'absolute',
  width:50,
  height:50,
  left:Constants.MAX_WIDTH/6-30,
  bottom:Constants.MAX_HEIGHT-395
  

},
refPlaceHolder1:{
  position:'absolute',
  width:50,
  height:50,
  left:Constants.MAX_WIDTH/2,
  bottom:Constants.MAX_HEIGHT-395
},
refPlaceHolder2:{
  position:'absolute',
  width:50,
  height:50,
  right:Constants.MAX_WIDTH/6-32,
  bottom:Constants.MAX_HEIGHT-395
},
avacados:{
  position:'absolute',
  width:30,
  height:30,
  left:30,
  bottom:Constants.MAX_HEIGHT-90,
},
balls:{
  position:'absolute',
  width:30,
  height:30,
  right:40,
  bottom:Constants.MAX_HEIGHT-90,
},
lamps:{
  position:'absolute',
  width:30,
  height:30,
  bottom:Constants.MAX_HEIGHT-120,
  left:200

},
lampsdrag:{
  width:30,
  height:30,
  left:300,
  bottom:-8

},
ballsFixed:{
  position:'absolute',
  width:30,
  height:30,
  left:Constants.MAX_WIDTH/6-20,
  bottom:Constants.MAX_HEIGHT-385
  

},
lampsFixed:{
  position:'absolute',
  width:30,
  height:30,
  left:Constants.MAX_WIDTH/2+8,
  bottom:Constants.MAX_HEIGHT-385

},
avacadosFixed:{
  position:'absolute',
  width:30,
  height:30,
  right:Constants.MAX_WIDTH/6-20,
  bottom:Constants.MAX_HEIGHT-385

},

})


export default App;
