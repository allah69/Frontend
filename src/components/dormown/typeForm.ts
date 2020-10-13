
export interface propsDormForm {
    DormName : string,
    DormAddress : string,
    DormLongitude : string,
    DormLatitude : string,
    phone : string,
    email : string,
    LineID : string,
    Website : string,
    DormDoc : File,
    AccomType: string,
    AllowSex: string,
    HaveCon: boolean,
    ConDistance: string,
    ConDescript: string, 
    HaveLaun: boolean,
    LaunDistance: string,
    LaunDescript: string,
    HaveParkLot: boolean,
    ParkLotDistance: string,
    ParkLotDescript: string,
    HaveRestuarant: boolean,
    RestuarantDistance: string,
    RestuarantDescript: string,
    HaveSmoke: boolean,
    SmokeDistance: string,
    SmokeDescript: string,
    HaveFitness: boolean,
    FitnessDistance: string,
    FitnessDescript: string,
    HavePool: boolean,
    PoolDistance: string,
    PoolDescript: string,
    HaveCommon: boolean,
    CommonDistance: string,
    CommonDescript: string,
    HaveInternet: boolean,
    InternetDescript: string,
}
export interface termService {
    show : boolean, 
    handleClose : ()=>void
}