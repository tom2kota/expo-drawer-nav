import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => (
    <View style={styles.containerStyle}>
        <Image source={imageSource} alt={title}/>
        <Text style={styles.textStyle}>{title}, (image score: {score})</Text>
    </View>
)


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20,
        padding: 20,
        marginVertical: 5,
        color:'#0b3f8e',
    }
});

export default ImageDetail;
