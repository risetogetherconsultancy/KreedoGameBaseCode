import React, {Component} from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import Images from '../assets/images';
export default class TouchableButton extends Component {
    constructor(props) {
        super(props);
this.images = {
            "active": Images[this.props.image],
            "pushed": Images[this.props.image + "Pressed"],
            "inactive": Images[this.props.image + "Inactive"]
        }
this.state = {
            status: "active"
        }
    }
handlePressIn = () => {
        if (this.props.inactive){
            return
        }
this.setState({
            status: "pushed"
        })
this.props.onPress && this.props.onPress()
    }
handlePressOut = () => {
        if (this.props.inactive){
            return
        }
this.setState({
            status: "active"
        })
    }
renderContent = () => {
        if (this.props.text){
            return (
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            )
        }
    }
render() {
        const content = this.renderContent()
        const status = this.props.inactive ? "inactive" : this.state.status;
        return (
            <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                <View style={[this.props.style, { justifyContent: 'center', alignItems: 'center'}]}>
                    <Image source={this.images[status]} style={{ width: this.props.style.width, height: this.props.style.height, position: 'absolute' }} resizeMode={this.props.resizeMode || "stretch"} />
                    {content}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}