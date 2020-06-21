import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '10'},
        {name: 'Friend #2', age: '20'},
        {name: 'Friend #3', age: '30'},
        {name: 'Friend #4', age: '40'},
        {name: 'Friend #5', age: '50'},
        {name: 'Friend #6', age: '60'},
        {name: 'Friend #7', age: '70'},
        {name: 'Friend #8', age: '80'},
        {name: 'Friend #9', age: '90'},
        {name: 'Friend #10', age: '100'},
        {name: 'Friend #11', age: '110'},
        {name: 'Friend #12', age: '120'},
    ];

    return (
        <View style={styles.containerStyle}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({item}) => (

                    <Text style={styles.textStyle}>
                        {item.name} &ndash; age: {item.age}
                    </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
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

export default ListScreen;
