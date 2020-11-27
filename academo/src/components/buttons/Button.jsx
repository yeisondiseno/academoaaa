import React from 'react'; 
// import './Button.scss';

const Button = ({ clase, title, iconL, iconR, link, on, type, dataT, btn } ) => (

    <> { btn ?     
            <button className={`waves-effect waves-light btn ${clase} `} 
                href={link}
                onClick={on}
                data-target={dataT}
                type={type
                    ? `${type}`
                    : 'button'
                }
            >
                { iconL ? 
                    <i className="material-icons icon-l">{iconL}</i> : ''
                }
                {title}
                { iconR ? 
                    <i className="material-icons icon-r">{iconR}</i> : ''
                }
            </button>
            :
            <a className={`waves-effect waves-light btn ${clase} `} 
                href={link}
                onClick={on}
                data-target={dataT}
                type={type
                    ? `${type}`
                    : 'button'
                }
            >
                { iconL ? 
                    <i className="material-icons icon-l">{iconL}</i> : ''
                }
                {title}
                { iconR ? 
                    <i className="material-icons icon-r">{iconR}</i> : ''
                }
            </a>
        }  
    </>

);

export default Button;