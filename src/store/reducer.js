
import actions from './actions'

export const initState = {
    step: 1,
    formsData: {
        firstName: '',
        lastName: '',
        bio: '',
        occupation: '',
        city: '',
        address: '',
        email: '',
        password: '',
        repeatPassword: ''

    }
}
export const reducer = (initState,action)=>{
    let newState= null ;
    const {step} = initState;
    switch (action.type) {
        case actions.ADD_FILDE:
            newState = {
                ...initState,
                formsData : {
                    ...initState.formsData,
                    [action.payload.key]: action.payload.value
                }
            }

            break;
        case actions.NEXT_STEP:
            console.log('NEXT_STEP',initState)
            newState = {
                     ...initState,
                     step: step + 1,
            }
            break;
        case actions.PREV_STEP:
            newState = {
                     ...initState,
                     step: step - 1,
            }
            break;
        case 'ADD_TEXT3':

            break;
        default:
            newState= initState;
            break;
    }
    console.log('this is action',action)
        // console.log('this is action =>', action, action.payload.key, action.payload.value);
        // console.log('init State', initState)
    return newState;
}