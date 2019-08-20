import React from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'



interface UserNumberProps {
    phone: string,
    mobile: string
}

interface UserNumberState {
    current: string,
    currentMobile: string,
    isValidNumber: boolean,
    isValidMobile: boolean

}

class PhoneNumber extends React.Component<UserNumberProps, UserNumberState>{
    constructor(props: UserNumberProps) {
        super(props);
        this.state = {
            current: props.phone,
            currentMobile: props.mobile,
            isValidNumber: false,
            isValidMobile: false
        }

    }
    public results = (num: any) => {
        return num.isValid();
    }
    public changeState = (elementName:string, val: string, isVal:boolean) => {
        if(elementName === 'landline'){
            this.setState({
                current: val,
                isValidNumber: isVal,
               
            })
        } else if(elementName === 'mobile'){
            this.setState({
                currentMobile: val,
                isValidMobile: isVal
            })
        }
    }
    private _checkValidPhoneNumber = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        const elName = (e.target as HTMLInputElement).name;
        const digits: any = parsePhoneNumberFromString(value, 'AU')

        console.log('test:', elName, value, digits.isValid(), digits)
        this.changeState(elName,value,digits.isValid())
        

    }

    public render() {
        const { current, currentMobile } = this.state
        const phoneNumber: any = parsePhoneNumberFromString(current, 'AU')
        let validNumber = Boolean
        console.log(phoneNumber)
        if (phoneNumber) {
            validNumber = this.results(phoneNumber)
        }

        return (
            <div>
                <form>
                    <h1>{validNumber ? 'valid' : 'not valid'}</h1>
                    <h3>{current}</h3>
                    <div>
                        <input name='landline' onChange={this._checkValidPhoneNumber} type="text" defaultValue={current} />
                        <label> landline: {current.replace(/[^0-9+()\s]/g, '')}</label>
                    </div>
                    <div>
                        <input name='mobile' onChange={this._checkValidPhoneNumber} type="text" defaultValue={currentMobile} />
                        <label> mobile: {currentMobile.replace(/[^0-9+()\s]/g, '')}</label>
                    </div>

                    <button type="button">submit</button>
                </form>
            </div>
        )
    }
}
export default PhoneNumber