import React, {FunctionComponent} from 'react';

type Props = {
    name: string,
    flag: string,
    capitale: string,
    cap: boolean
}

const Card:FunctionComponent<Props> = (props) => {

    const name = props.name;
    const flag = props.flag;
    const capitale = props.capitale;
    const cap = props.cap;

    return (

        <div className="card">
            <h1 className="titre">{name}</h1>
            <img src={flag} className="flag" />
            {cap == true && <p className="capitale">Capitale: {capitale}</p>}
        </div>

    )
}

export default Card;