
export interface trivQuestions{
    category:string;
    type:string;
    difficulty:string
    question:string;
    correct_answer:string;
    incorrect_answers:string[];
}
export interface Props{
    trivQuestions:string[] 
    page:number
    resultQuestions:any[] 
}