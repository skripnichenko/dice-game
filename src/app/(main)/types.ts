export enum DIRECTIONS_ENUM {
    UNDER = 'under',
    OVER = 'over'
}


export interface IResult {
    time: Date
    isTrue: boolean
    direction: DIRECTIONS_ENUM
    randomNumer: number
    chosenNumber: number
}