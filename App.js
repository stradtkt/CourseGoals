import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text}/>
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} 
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
});

export default App;
