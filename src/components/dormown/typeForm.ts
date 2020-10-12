
export interface propsDormForm {
    DormName : string,
    DormAddress : string,
    DormLongitude : string,
    DormLatitude : string,
    phone : string,
    email : string,
    LineID : string,
    Website : string,
}
export interface termService {
    show : boolean, 
    handleClose : ()=>void
}