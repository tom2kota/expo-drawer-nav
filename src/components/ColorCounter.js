import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const ColorCounter = ({buttonTitle, onIncrease, onDecrease}) => {

    return (
        <View style={styles.containerStyle}>
            <Button onPress={() => onIncrease()}
                    accessibilityLabel={`Increase ${buttonTitle}`}
                    color={buttonTitle}
                    title={`Increase ${buttonTitle}`}
            />
            <Button onPress={() => onDecrease()}
                    accessibilityLabel={`Decrease ${buttonTitle}`}
                    color={buttonTitle}
                    title={`Decrease ${buttonTitle}`}
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
    }
});

export default ColorCounter
