import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet, Image, Alert} from 'react-native';

import Images from '../assets/images';
export default class TouchableSwitch extends Component {
    constructor(props) {
        super(props);
this.images = {
            "active": Images[this.props.image],
            "inactive": Images[this.props.image + "Inactive"],
        }
this.state = {
            status: this.props.status
        }
        this.onSwitch = this.props.onSwitch || null
    }
handlePressOut = () => {
        let newStatus = this.state.status === "active" ? "inactive" : "active";
        this.setState({
            status: newStatus
        })
if (this.onSwitch){
            this.onSwitch(newStatus);
        }
    }
setStatus = (status) => {
        this.setState({
            status: status
        })
    }
render() {
        return (
            <TouchableWithoutFeedback onPressOut={this.handlePressOut}>
                <View style={this.props.style}>
                    <Image source={this.images[this.state.status]} style={{ width: this.props.style.width, height: this.props.style.height, position: 'absolute' }} resizeMode={this.props.resizeMode || "stretch"} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}