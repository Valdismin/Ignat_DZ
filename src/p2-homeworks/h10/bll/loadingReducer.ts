const initState = {
    isLoading:false
};



export const loadingReducer = (state = initState, action: setLoadingActionType): initialStateType => { // fix any
    switch (action.type) {
        case "SET_LOADING": {
            return {...state,isLoading:action.isLoading}
        }
        default: return state;
    }
};

export const loadingAC = (isLoading:boolean) => ({type:"SET_LOADING",isLoading} as const); // fix any

type setLoadingActionType = ReturnType<typeof loadingAC>
export type initialStateType = typeof initState