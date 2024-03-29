import React from 'react';
import '../Input/Input.scss';


const Input = ( { value, title, on, id, type, name, autoComplete, error, errorMessage, required } ) => (

    <div className="input__content">
        <label>
            {title}
        </label>
        <input id={id} 
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
        { error ?
            <span className="error-message" >
                {errorMessage}
            </span>
            : ''    
        }
    </div>
);

export default Input;