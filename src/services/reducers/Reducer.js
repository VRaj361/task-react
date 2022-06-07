export default function cdata(state=[],action){
    switch(action.type){
        case "ADD":
            return [...state,action.product]

        default:
            return [...state]
    }
}