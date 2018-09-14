import { Answer } from "./answer";

export interface Question{
    Instance?: string;
    Hint?: string;
    Answers?: Answer[];
    IsValid?: boolean;
    Guid?: string;
}