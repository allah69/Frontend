export interface propsSuggestItem  {
    id : string,
    name : string
}
export interface propsSearch {
    dormName? : string,
    price? : number,
    distance? : number,
    maxperson? : number,
    rating? : number,
    roomSize? : number,
    roomType? : string,
    gender? : string,
    convenienceStore? : boolean,
    kitchen? : boolean,
    laundry? : boolean,
    parking? : boolean,
    pet? : boolean,
    internet? : boolean,
    smoking? : boolean,
    fitness? : boolean,
    pool? : boolean,
    cooking? : boolean,
    restRoom? : boolean,
    show : boolean,
    handleClose : () => void
    sendBack : (data : string) => void
}
export interface propsDorm {
    src : string,
    id : string
}
export interface propsCarousel {
    dorms : propsDorm[]
}
export interface DormInform {
    dormId?: string,
    name?: string,
    code?: string,
    owner?: {
        userId?: string,
        name?: {
            firstName?: string,
            lastName?: string
        },
        profilePic?: string
    },
    contact?: {
        telephone?: string,
        email?:     string,
        lineID?:    string,
        website?:   string,
    },
    address?: {
        address?: string,
        coordiante?: {}
    },
    utility?: [
        {
            type?: string,
            distance?: number,
            description?: string
        }
    ],
    room: [
        {
            roomid?: number,
            name?: string,
            capacity?: number,
            image?: [
                string
            ],
            bathroom?: number,
            aircond?: number,
            kitchen?: number,
            bedroom?: number,
            description?: string,
            price?: {
                amount?: number,
                pricePer?: number
            },
            allowedSex?: any
        }
    ],
    allowedSex?: string,
    avgStar?: number,
    license?: [
        string
    ],
    createdOn?: string,
    modifiedOn?: string,
    approved?: boolean,
    approvedOn?: string
}