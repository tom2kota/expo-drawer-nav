import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    const screenTitle = 'Home Screen';
    const buttonTitle = 'Go 2 Components =>';
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{screenTitle}</Text>
            <Button
                accessibilityLabel={buttonTitle}
                color={styles.buttonStyle.color}
                title={buttonTitle}
                onPress={() => navigation.navigate('COMPONENTS')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30,
        color: '#3a19f8',
        padding: 30
    },
    buttonStyle: {
        color: '#f8193b',
    }
});

export default HomeScreen;
