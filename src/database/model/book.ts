
import { RowDataPacket } from "mysql2";

export interface Book extends RowDataPacket {
    id: number;
    name: string;
    author: string;
    category: string;
    releasedDate: string;
    language: string;
    image?: string;
    bookFile?: string;
}
