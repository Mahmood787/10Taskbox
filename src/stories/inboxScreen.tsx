import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, archive } from "../lib/redux";
import AddTask from "./AddTask";
import  {task} from './Task';

//components
// import AddTask from "./addTask";
import TaskList from "./TaskList"

const InboxScreen = () => {
  const task = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(task);

  const onPinTask = (id: string) => {
    dispatch(pinTask({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archive({ id: id }));
  };
  
  return (
    <div>
      <AddTask />
      <TaskList
        tasks={task as task[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
      />
    </div>
  );
};

export default InboxScreen;
