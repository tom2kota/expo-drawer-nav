import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ComponentsScreen = ({navigation}) => {
    const screenTitle = 'Components Screen';
    const screenSubtitle = 'Welcome to Components screen';
    const buttonTitle = 'Go 2 List =>';

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{screenTitle}</Text>
            <Text style={styles.subtitleStyle}>{screenSubtitle}</Text>
            <Button
                accessibilityLabel={buttonTitle}
                style={styles.buttonStyle}
                title={buttonTitle}
                onPress={() => navigation.navigate('LIST')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 30,
        color: '#3a19f8',
        padding: 10
    },
    subtitleStyle: {
        fontSize: 17,
        color: '#5a595c',
        padding: 30
    },
    buttonStyle: {
        color: '#f8193b',
    }
});

export default ComponentsScreen;
