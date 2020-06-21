import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const ComponentsScreen = ({navigation}) => {

    const [state, setState] = useState('');
    const handleInputChange = (newValue) => setState(newValue);

    const screenTitle = 'Components Screen';
    const screenSubtitle = 'Welcome to Components screen';
    const buttonTitle = {
        home: '<= Go 2 Homepage',
        list: 'Go 2 List =>',
        images: 'Go 2 Images =>',
        counter: 'Go 2 Counter =>',
        color: 'Go 2 Color =>'
    }
    console.log(state)
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{screenTitle}</Text>
            <Text style={styles.subtitleStyle}>{screenSubtitle}</Text>

            <TextInput style={styles.textInputStyle}
                       autoCorrect={false}
                       autoCapitalize="none"
                       value={state}
                       onChangeText={handleInputChange}
                       placeholder="Enter your password"
            />
            <Text>{state}</Text>
            <Text>{state.length > 5 ? null : 'LESS than 5'}</Text>

            <Button
                accessibilityLabel={buttonTitle.home}
                color={styles.buttonStyle.color}
                title={buttonTitle.home}
                onPress={() => navigation.navigate('HOME')}/>

            <Button
                accessibilityLabel={buttonTitle.list}
                color={styles.buttonStyle.color}
                title={buttonTitle.list}
                onPress={() => navigation.navigate('LIST')}/>

            <Button
                accessibilityLabel={buttonTitle.images}
                color={styles.buttonStyle.color}
                title={buttonTitle.images}
                onPress={() => navigation.navigate('IMAGES')}/>

            <Button
                accessibilityLabel={buttonTitle.counter}
                color={styles.buttonStyle.color}
                title={buttonTitle.counter}
                onPress={() => navigation.navigate('COUNTER')}/>

            <Button
                accessibilityLabel={buttonTitle.color}
                color={styles.buttonStyle.color}
                title={buttonTitle.color}
                onPress={() => navigation.navigate('COLOR')}/>

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
    textInputStyle: {
        color: '#2f65b8',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
        marginBottom: 20,
        marginHorizontal: 30,
        minWidth: '50%',
        borderColor: '#d7dbe0',
        borderWidth: 1
    },
    buttonStyle: {
        color: '#f8193b',
    }
});

export default ComponentsScreen;
