import React from 'react';
import Task, {task} from './Task';


export interface props {
    tasks?:task[]
    onArchiveTask?: (id:task["id"])=>void
    onPinTask?: (id:task["id"])=>void
    loading?:boolean;
}
export default function TaskList({loading,
    tasks,
    onPinTask,
    onArchiveTask,
  }: props) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
    </div>;
  }

  if (tasks!.length === 0) {
    return <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
    </div>;
  }

  const tasksInOrder = [
    ...tasks!.filter(t => t.state === 'TASK_ARCHIVED'),
    ...tasks!.filter(t => t.state !== 'TASK_ARCHIVED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}