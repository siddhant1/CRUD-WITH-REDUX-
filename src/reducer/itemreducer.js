let initialState = {
    product :[]
}

export const itemreducer = (state = initialState, action) => { 
    switch (action.type) { 
        case "ADD":
            return {
                ...state,
                product: state.product.concat(action.payload.object)
            }
            break;
        default:
            return state;   
        
    }
}