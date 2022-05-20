import React,{forwardRef} from 'react';
export const Input = forwardRef(({label, name, type, errorMessage, value, requiredLabel, ...rest},ref)=>{


    return(
        <div className="w-full mb-3">
        <label htmlFor={name} className={`text-left w-full`}>{label} {requiredLabel && <span className="text-red-400">*</span>}</label>
        <div className="flex flex-row items-center mt-2">

            <input
                {...rest}
                name={name}
                type={rest.type}
                ref={ref}
                className={`w-full border rounded-lg border-base-gray-100  py-3 px-2 outline-none`}
            />
            
        </div>
        {errorMessage &&<div className="invalid-feedback">
                            {errorMessage}
                        </div>}
    </div>
    )
})