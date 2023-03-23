export default interface Job {
    id:number,
    company_id?:number,
    name:string,
    salary_per_day:number,
    location:string,
    capacity:number,
    detail:string
    qualifications:string[],
    contact:{name:string, email:string, phone:string}
}