import { Col, Row } from 'react-bootstrap';

import CardListItem from '../card-list-item/card-list-item';

import './card-list.scss';

const Cardlist = ({data}) => {
    console.log(data);
    const elements = data.map(item => {
        return (

                <CardListItem 
                key={item.id}
                url={item.url}
                english={item.english}
                transcription={item.transcription}
                check={item.russian} />
                

            
        )   
    })
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
                {elements}
          
        </div>
    )
}

export default Cardlist; 