export interface Stud {
    id?:number,
    rollno:number,
    name: string,
    email: string
}
export interface Att{
    id?:number,
    rollno:string,
    date:string,
    status:string
}
export interface Graph{
    date:string,
    no_of_attendees:number
}