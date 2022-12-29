import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <Pressable android_ripple={{backgroundColor: '#cccccc'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressing}>
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
    },
    goalItemText: {
      color: 'white',
      padding: 8,
    },
    pressing: {
        opacity: 0.4,
    },
  });