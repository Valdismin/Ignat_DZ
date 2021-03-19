import {UserType} from "./../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: any): any => {
    switch (action.type) {
        case "sort": {
            if(action.payload === "up") {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })]
            } else if(action.payload === "down"){
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })]
            }
        }
        case "check": {
            return [...state.filter(u => u.age>=action.payload)]
        }
        default: return state
    }
};
