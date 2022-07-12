export type Kinds = "team" | "personal"; // data kinds type

export interface PInfoStatus {
    id?:string, // data id
    name?:string, // data name
    isView?:boolean, // data view visibility 
    color?:string, // data color
    kinds?:Kinds, // data kinds
}