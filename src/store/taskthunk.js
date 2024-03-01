function addTask(task) {
  return dispatch => {
    //Firebase

    setTimeout(() => {
      dispatch({
        type: 'ADD_TASK',
        payload: task,
      });
    }, 1000);
  };
}
