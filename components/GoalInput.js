import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';



const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 24,
      borderBottomWidth: 1,
      borderColor: '#ccc'
  
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      borderRadius: 4,
      marginRight: 6,
      height: 50
    },
  });

export default GoalInput;