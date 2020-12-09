import { Story } from "@storybook/react/types-6-0"
import React from "react"
import Task, {props} from './Task'


export default {
    title:"Task",
    component: Task,
    args:{
        task:{id:"1",title:"New Task", state:"TASK_INBOX"}
    }
}

const Template:Story<props> = args =><Task {...args}/>
export const Default = Template.bind({})

export const Pinned = Template.bind({})
Pinned.args ={
    task:{id:"1", title:"Pinned Task", state:"TASK_PINNED"}
}
export const Archived = Template.bind({})
Archived.args ={
    task:{id:"1", title:"Archived Task", state:"TASK_ARCHIVED"}
}


