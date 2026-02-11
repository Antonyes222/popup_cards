import Lights from '../objects/Lights.tsx'
import Floor from '../objects/Floor.tsx'
import Card from '../objects/card/Card.tsx'

export default function CreateScene() {
    const exampleCard: any = {
        size: [11, 8.5],
        position: [0, 0],
        state: "open",
        color: "white",
        children: []
    }
    return (
        <>
            <Card cardData={exampleCard} />
            <Lights />
            <Floor />
        </>
    )
}

/* 
Think carefully before you continue this. remember that your tools UI will have to interact with the Canvas itself, and also be
built fro the cardData and cardStructures Interface. How do you want to manage states here? Use Zustand maybe?
*/