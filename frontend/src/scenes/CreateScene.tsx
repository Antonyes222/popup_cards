
import Lights from '../objects/Lights.tsx'
import Floor from '../objects/Floor.tsx'
import Card from '../objects/card/Card.tsx'

import Cube from '../objects/Cube.tsx'

import { PopupCard, Structure } from '../objects/card/cardData.ts'

export default function CreateScene() {
    let exampleCard = new PopupCard([11,8.5],[0,0])
    return(
        <>
            <Card popupcard={exampleCard}/>
            <Lights/>
            <Floor/>
        </>
    )
}

/* 
Think carefully before you continue this. remember that your tools UI will have to interact with the Canvas itself, and also be
built fro the cardData and cardStructures Interface. How do you want to manage states here? Use Zustand maybe?
*/