import React, { forwardRef, Dispatch, SetStateAction, ChangeEvent , KeyboardEvent} from 'react'
import './style.css';
import { error } from 'console';

interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder : string;
    setValue: React.Dispatch<React.SetStateAction<String>>;
    value : string;
    error: boolean;

    icon?: string;
    onButtonClick?: () => void;

    message?: string;

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

//             component : Input Box           //

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
//              state : properties            //
    const {label, type,  placeholder , value, error, icon, message } = props;
    const{setValue, onButtonClick, onKeyDown} = props;

// onchange event handler 
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(value);
    }    

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement> ) => {
        if(!onKeyDown) return;
        onKeyDown(event);
    };
    
//              render : Input Box 컴포넌트   //    

    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDown}/>
                { onButtonClick !== undefined &&  
                    <div className='icon-button'>
                        {icon !== undefined && 
                         <div className={`icon ${icon}`}></div> }
                </div>
                }
            </div>
            {message !== undefined && 
            <div className='inputbox-message'>{message}</div>}
        </div>

    )


});

export default InputBox;