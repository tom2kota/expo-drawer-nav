import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const images = [
        {title: 'Forest', score: 0.5, imageSource: require('../../assets/forest.jpg')},
        {title: 'Mountain', score: 0.7, imageSource: require('../../assets/mountain.jpg')},
        {title: 'Sea', score: 0.1, imageSource: require('../../assets/beach.jpg')},
        {title: 'Forest', score: 0.5, imageSource: require('../../assets/forest.jpg')},
        {title: 'Mountains', score: 0.7, imageSource: require('../../assets/mountain.jpg')},
    ]

    return (
        <View style={styles.containerStyle}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={images}
                keyExtractor={(item) => (item.title + Math.random())}
                renderItem={({item}) => (
                    <ImageDetail title={item.title} imageSource={item.imageSource} score={item.score}/>
                )}
            />
        </View>
    )
}

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
        color: '#f8d415',
        backgroundColor: '#0b3f8e',
        borderColor: '#f8d415',
        borderStyle: 'solid',
        borderWidth: 2,
    },
});

export default ImageScreen;
