import React, { useState } from 'react';
import './Video.scss';

// complementos 
import img from '../../src/img/img-temporal.jpg';
// import Input from '../../components/Input/Input';
import InpuTextArea from '../../components/InputTextArea/InputTextArea';
import Button from '../../components/buttons/Button';

const Video = () => {

    // usuario
    let user = 'Yeison';


    // lista de comenyarios
    let [ comments, setComments ] = useState([{
        'usuario': 'Usuario 1',
        'comment': 'Estes es un comentario'
    },
    {        
        'usuario': 'Usuario 2',
        'comment': 'Estes es un comentario'
    }]);
    console.log( 'Es comments' ,comments)


    //datos cometarios
    const [ newComment, setNewComment ] = useState();
    console.log( 'Es new comment' ,newComment)
    const handleInputChange = e => {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }


    // agregar comentario
    const handleComment = e => {
        e.preventDefault();

        console.log('Se ha comentado');
        setComments(  [...comments, { usuario: user, comment: `${newComment.comment}` }])
    }


    return(
        <div className="video">
            <div className="vide__video">
                <img src={img} alt="Imágen temporal"/>
            </div>
            <div className="video__chat">

                <h1>
                    Video 
                </h1>
                <div className="comments">
                    { comments.map((item) => (
                        <div>
                            <li>
                                {item.usuario}
                            </li>
                            <li>
                                {item.comment}
                            </li>
                        </div>
                    ))}
                </div>
                <form onSubmit={(e) => handleComment(e)} >
                    <InpuTextArea 
                        title="Comentar" 
                        name="comment"
                        id="comment"
                        on={handleInputChange}
                    /> 
                    <Button btn type="submit" title="Comentar" />
                </form>
            </div>
        </div>
    ); 
}

export default Video;