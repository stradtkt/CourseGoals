import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
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
      padding: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
    },
    goalItemText: {
      color: 'white',
    }
  });