import { Question } from "./question";

export interface Test{
    Name?: string;
    Description?: string;
    TestTimeLimit?: string;
    QuestionTimeLimit?: string;
    Questions?: Question[];
    Guid?: string;
    IsValid?: boolean;
}