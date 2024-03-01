// TaskListScreen.tsx
import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  name: string;
}

const TaskListScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      name,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Management App</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskItem task={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TaskListScreen;
