import React,{useState} from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDataAccount from './FormUserDataAccount';
import {useStateData} from '../store/StateManagment';
import Confirm from './Confirm';
import Successful from './Successful'

export default function UserForm() {
    const [state, dispatch] = useStateData();
    const [dataFroms, setDataFroms] = useState({
        step : 1,
        formsData : {
            firstName:'',
            lastName:'',
            bio:'',
            occupation:'',
            city:'',
            address:'',
            email:'',
            password:'',
            repeatPassword:''

        }
    });
const chengeComponent = (event)=>{
        const {step} = dataFroms;
        switch (event) {
            case 'next':
                setDataFroms(prevState => {
                    return {
                        ...prevState,
                        step: step + 1,
                    }
                })
                break;
            case 'prev':
                 setDataFroms(prevState => {
                     return {
                         ...prevState,
                         step: step - 1,
                     }
                 })
                break;
            default:
                break;
        }
}
const chengeHandler = (data , e)=>{
    console.log(`input name ${data} and input value ${e.target.value}`)
    let input = e.target;
    setDataFroms(prevState => {
        return{
            ...prevState,
            formsData : {
                ...dataFroms.formsData,
                [data] : input.value
            }
        }
    })
    console.log('state ====> ',dataFroms)
}
switch (state.step) {
        case 1:
            return (
                <FormUserDetails nextComponent={chengeComponent} func_che={chengeHandler}/>
            )
        case 2:
            return (
                <FormPersonalDetails nextComponent={chengeComponent}/>
            )
        case 3:
            return (
                <FormUserDataAccount nextComponent={chengeComponent}/>
                )
                case 4:
                return (
                    <Confirm/>
                )
                case 5:
                return (
                    <Successful/>
                )
        default:
            break;
    }
}
