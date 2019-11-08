import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { ColorPicker, toHsv } from 'react-native-color-picker';

class palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: toHsv('blue')
        };
        this.onColorChange = this.onColorChange.bind(this);
    }
    onColorChange(color) {
        this.setState({ color })
    }
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#212021' }}>
                <Text style={{ color: 'white' }}>React Native Color Picker - Controlled</Text>
                <ColorPicker
                    oldColor='purple'
                    color={this.state.color}
                    onColorChange={this.onColorChange}
                    onColorSelected={() => navigation.navigate("Pattern", {selectedColor: this.state.color})}
                    onOldColorSelected={color => alert(`Old color selected: ${color}`)}
                    style={{ flex: 1 }}
                />
                <Button title = "확인" onPress={() => navigation.navigate("Pattern", {selectedColor: this.state.color})}></Button>
            </View>
        );
    }
}

palette.navigationOptions = {
    header: null
}

export default palette;