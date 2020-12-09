/* eslint-disable */
import React from 'react';

export interface task {
    id: string;
    title: string;
    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
}
export interface props {
    task?:task
    onArchiveTask?: (id:task["id"])=>void
    onPinTask?: (id:task["id"])=>void
    onUnpinTask?: (id: task["id"]) => void;
}

export default function Task(props:props) {
    const [isChecked, setIsChecked] = React.useState<boolean>();
  return (
    <div className={`list-item ${props!.task!.state}`} style={{position:"relative"}}>
        {props!.task!.state === 'TASK_ARCHIVED' ?(
          <div style={{
            position:"absolute",top:"50%",left:"4%",
            width:"90%", height:"2px", background:"#cbd5e0"
        }}></div>
        ):null}
      <label className="checkbox" >
        <input
          type="checkbox"
          defaultChecked={props!.task!.state === 'TASK_ARCHIVED'}
          disabled={props!.task!.state === "TASK_ARCHIVED" ? true : false}
          name="checked"
          onClick={() => {
            props!.task!.state !== "TASK_ARCHIVED" && !isChecked ?
               !!props.onPinTask && props!.onPinTask!(props!.task!.id)
              : null
            setIsChecked(!isChecked)
          }}
        />
        
        <span className="checkbox-custom" onClick={() => props!.onArchiveTask!(props!.task!.id)} />
      </label>
      <div className="title">
        <input type="text" value={props!.task!.title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {props!.task!.state !== 'TASK_ARCHIVED' && (
         
          <a onClick={() => props!.onPinTask!(props!.task!.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}