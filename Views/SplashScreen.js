import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';


export const SplashScreen = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.title}>Bell Arts Factory</Text>
            <Image
        style={styles.logo}
        source={require('./../assets/VPLA-2019-3D-Logo-1000px.png')}
            />
            </View>);
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#2ccbe0',
        padding: 25,
    },
    logo: {
        height: 180,
        width: 180,
        resizeMode: 'cover',
        marginBottom: height/6,
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        marginBottom: height/7,
        fontFamily: 'Pacifico-Regular',
        color: 'yellow',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 4,
        padding: 0,
    },
});
