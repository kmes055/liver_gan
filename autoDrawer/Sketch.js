import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class sketch extends Component {
    constructor(props) {
        super(props);

        const { navigation } = this.props;  
    }
    state = {
        selectedPicture: null,
        takenPicture: null,
    };

    // 사진 선택, 사진 찍기 함수 구현
    getPermission = async () => {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        }
    }
    getPermission2 = async () => {

        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
        }
    }
    selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        });
        this.setState({ selectedPicture: result.uri });
    }
    takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
        });
        this.setState({ selectedPicture: result.uri });
    }

    componentDidMount() {
        this.getPermission();
        this.getPermission2();
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}>
                    <View style={{ flex: 7 }}></View>
                    <View style={{ flex: 1, backgroundColor: '#02C340' }}></View>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowLogo}>
                    <View style={{ flex: 1 }}></View>
                    <Image style={styles.sketch}
                        source={require('./Sketch.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowBtn}>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#61B7C9' }}
                        onPress={
                            this.selectImage
                        }
                    >
                        {/*이곳에 갤러리 버튼을 누르면 나올 갤러리 화면 연결해야함. 현재는 home으로 연결해놓음 */}
                        <View style={{ flex: 8 }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon1}
                                    source={require('./sketchIcon.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}> Gallery</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#61B7C9' }}
                        onPress={this.takeImage}>
                        {/*이곳에 카메라 버튼을 누르면 나올 카메라 화면 연결해야함. 현재는 home으로 연결해놓음 */}
                        <View style={{ flex: 8 }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon2}
                                    source={require('./cameraIcon.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}>Camera</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                </View>
                <View style={styles.rowSpace2}></View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowFileName}>
                    <View style={{ flex: 2 }}></View>

                    <View style={{ flex: 5 }}></View>
                    <View style={{ flex: 2 }}>
                    <Button title = "뒤로" onPress={() => navigation.navigate("Home", {selectedSketch:this.state.selectedPicture})}></Button>

                    </View>
                    <View style={{ flex: 5 }}></View>
                    <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowSpace3}></View>
            </View>
        );
    }
}

sketch.navigationOptions = {
    header: null
}

export default sketch;