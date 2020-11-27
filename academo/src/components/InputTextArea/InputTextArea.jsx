import React from 'react';
// import '../Input/Input.scss';


const InputTextArea = ( { value, title, on, id, type, name, autoComplete, error, errorMessage, required } ) => (

    <div className="input-field">
        <textarea id={id} 
            type={type}
            name={name}
            value={value} 
            onChange={on}
            autoComplete={autoComplete}
            className={ 
                ` ${ error ?
                    'invalid'
                    :
                    ''
                }
                `
            }
            required={ required ? true : false }
        />
        <label>
            {title}
        </label>
        { error ?
            <span className="error-message" >
                {errorMessage}
            </span>
            : ''    
        }
    </div>
);

export default InputTextArea;