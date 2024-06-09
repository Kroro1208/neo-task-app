import { v4 as uuidv4 } from 'uuid';

export interface ProjectCategory {
    _id: string;
    categoryName: string;
    clearkUserId: string;
}