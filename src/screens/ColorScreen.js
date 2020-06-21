import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;
const CHANGE_RED = 'change_red';
const CHANGE_GREEN = 'change_green';
const CHANGE_BLUE = 'change_blue';

// const state = {red: number, green: number, blue: number};
// const action = {type: CHANGE_RED || CHANGE_GREEN || CHANGE_BLUE, payload: COLOR_INCREMENT || -1 * COLOR_INCREMENT};

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_RED: {
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : {
                ...state,
                red: state.red + action.payload
            }
        }
        case CHANGE_GREEN: {
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : {
                ...state,
                green: state.green + action.payload
            }
        }
        case CHANGE_BLUE: {
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : {
                ...state,
                blue: state.blue + action.payload
            }
        }
        default:
            return state
    }
}

const ColorScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state;
    return (
        <View style={styles.containerStyle}>
            <ColorCounter buttonTitle='red'
                          onIncrease={() => dispatch({type: CHANGE_RED, payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: CHANGE_RED, payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter buttonTitle='green'
                          onIncrease={() => dispatch({type: CHANGE_GREEN, payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: CHANGE_GREEN, payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter buttonTitle='blue'
                          onIncrease={() => dispatch({type: CHANGE_BLUE, payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: CHANGE_BLUE, payload: -1 * COLOR_INCREMENT})}
            />
            <View style={{
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                marginBottom: 0,
                width: '100%',
                height: 200
            }}>
                <Text style={styles.textStyle}>{`rgb(${red}, ${green}, ${blue})`}</Text>
                {/*<Text style={styles.textStyle}>{`rgb(${state.red}, ${state.green}, ${state.blue})`}</Text>*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        lineHeight: 200,
    },

});

export default ColorScreen
