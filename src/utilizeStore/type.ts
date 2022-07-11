export type Kinds = "team" | "personal";

export interface PInfoStatus {
    id:string,
    name:string,
    isView:boolean,
    color:string,
    kinds:Kinds,
}