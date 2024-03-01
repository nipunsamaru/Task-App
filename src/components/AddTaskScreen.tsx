// AddTaskScreen.tsx
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface AddTaskScreenProps {
  onAddTask: (name: string) => void;
}

const AddTaskScreen = ({onAddTask}: AddTaskScreenProps) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});

export default AddTaskScreen;
