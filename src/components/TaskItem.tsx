// TaskItem.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TaskItemProps {
  task: {
    id: string;
    name: string;
  };
}

const TaskItem = ({task}: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <Text>{task.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TaskItem;
