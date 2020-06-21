import React, {useReducer} from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'

const INITIAL_VALUE = 10;
const INCREMENT_VALUE = 'increment_value';
const DECREMENT_VALUE = 'decrement_value';
const RESET_VALUE = 'reset_value';

// const state = {count: number};
// const action = {type: 'increment' || 'decrement' || 'reset', payload: 10}

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {...state, count: state.count + action.payload}
        case DECREMENT_VALUE:
            return {...state, count: state.count - action.payload}
        case RESET_VALUE:
            return {...state, count: state.count * action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {count: INITIAL_VALUE});
    const {count} = state;
    const screenTitle = 'Counter Screen';
    const screenSubtitle = 'Using React Hooks: useReducer';
    const buttonTitle = {
        increase: 'INCREMENT +10',
        decrease: 'DECREMENT -10',
        reset: 'RESET'
    }

    const actionHandlerIncrement = () => dispatch({type: INCREMENT_VALUE, payload: INITIAL_VALUE})
    const actionHandlerDecrement = () => dispatch({type: DECREMENT_VALUE, payload: INITIAL_VALUE})
    const actionHandlerReset = () => dispatch({type: RESET_VALUE, payload: 0})

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{screenTitle}</Text>
            <Text style={styles.subtitleStyle}>{screenSubtitle}</Text>
            <Button
                accessibilityLabel={buttonTitle.increase}
                color={styles.buttonStyle.color}
                title={buttonTitle.increase}
                onPress={actionHandlerIncrement}/>
            <Button
                accessibilityLabel={buttonTitle.decrease}
                color={styles.buttonStyle.color}
                title={buttonTitle.decrease}
                onPress={actionHandlerDecrement}/>
            <Button
                accessibilityLabel={buttonTitle.reset}
                color={styles.buttonStyle.color}
                title={buttonTitle.reset}
                onPress={actionHandlerReset}/>

            <Text style={styles.subtitleStyle}>{`Result: ${count}`}</Text>
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
        color: '#34c70d'
    }
});


export default CounterScreen
