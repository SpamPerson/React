export type Kinds = "team" | "personal";

export interface PInfoStatus {
    id?:string, // 데이터 아이디
    name?:string, // 데이터명
    isView?:boolean, // 데이터 
    color?:string, // 색상
    kinds?:Kinds, // 데이터 종류
}