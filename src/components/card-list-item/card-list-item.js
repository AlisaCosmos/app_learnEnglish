import { useState } from 'react';
import {Card, Button, Col} from 'react-bootstrap';

const CardListItem = ({id, url, english, transcription, check}) => {
    console.log({check})
    const [pressed, setPressed] = useState(false);
    
    const handelPressed = () => {
        setPressed (!pressed)
    };
    return (
        <Col className="">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{english}</Card.Title>
                    <Card.Text>{transcription}</Card.Text>
                    <Button  variant="primary" onClick={handelPressed}>{pressed? `${check}`:"Проверить"}</Button>
                </Card.Body>
            </Card>
            
        </Col>
    )   
}
export default CardListItem;