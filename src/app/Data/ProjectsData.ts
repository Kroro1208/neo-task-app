import {v4 as uuidv4} from "uuid";

export interface Project {
    _id: string;
    name: string;
    icon: string;
    createdAt: Date;
    category: string[] | string| any;
    tasks: Task[];
    clerkUserId: string;
}

export interface Task {
    _id?: string;
    name: string;
    status: string;
    createdAt: Date;
    priority: string;
    projectName: string;
    isChecked: boolean;

}