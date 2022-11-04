import "./Input.css";

export interface Props {
    className? : any;
    id?: any;
    labelclassName?: any;
    label?: any;
    inputClassName?: any;
    type?: any;
    placeholder?: any;
    name?: any;
    value?: any;
    onChange?: any;
    onClick?: any;
    maxLength?: any;
    accept?: any;
    checked?: any;
    multiple?: any;
    disabled?: any;
}

const Input = ({
    className,
    id,
    labelclassName,
    label,
    inputClassName,
    type,
    placeholder,
    name,
    value,
    onChange,
    onClick,
    maxLength,
    accept,
    checked,
    multiple,
    disabled,
    }:Props) =>{
    return(
        <>
            <div className={className} >
                <label
                    htmlFor={id}
                    className={labelclassName}
                >
                    {label}
                </label>
                <input 
                    className={inputClassName}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                    maxLength={maxLength}
                    accept={accept}
                    checked={checked}
                    multiple={multiple}
                    disabled={disabled}
                />
            </div>
        </>
    );
}

export default Input;