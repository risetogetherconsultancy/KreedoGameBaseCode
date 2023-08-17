import React, {Component} from 'react';
import { Text, View, TouchableWithoutFeedback, Image, PanResponder,StyleSheet,
    Animated } from 'react-native';
import Images from '../assets/images';
export default class TouchableButton extends Component {
    textPosition={x:0,y:0};
    constructor(props) {
        super(props);
        this.position.addListener(latestPosition =>{
      this.textPosition = latestPosition;

    });
    
}

   

position= new Animated.ValueXY();
panResponder= PanResponder.create({
  onStartShouldSetPanResponder:()=> true,

  onPanResponderMove:(e,gesureState)=>{
    console.log(gesureState);
    const newPosition ={x:gesureState.dx,y:gesureState.dy};
    this.position.setValue(newPosition);

  },
  onPanResponderGrant:()=>{
    this.position.setOffset({x:this.textPosition.x, y: this.textPosition.y});
    this.position.setValue({x:0,y:0});

  },
  onPanResponderEnd:()=>{
    this.position.flattenOffset();
  }


});
   

render() {
       
        return (
            <Animated.View style={[this.position.getLayout()]}{...this.panResponder.panHandlers}>
      <Image style={styles.lampsdrag} source={Images.lamps} resizeMode='stretch'></Image>
      
      </Animated.View>
        )
    }
}

const styles = StyleSheet.create({

    lampsdrag:{
        width:30,
        height:30,
        left:300,
        bottom:-8
      
      },
});
