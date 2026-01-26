
import CanvasLayout from '../layouts/CanvasLayout.tsx'
import CreateScene from '../scenes/CreateScene.tsx'

import Toolbar from '../components/Toolbar.tsx'

export default function Create() {
    return(
        <CanvasLayout scene={CreateScene}>
            <Toolbar/>
        </CanvasLayout>
    )
}

/* 
Think carefully before you continue this. remember that your tools UI will have to interact with the Canvas itself, and also be
built fro the cardData and cardStructures Interface. How do you want to manage states here? Use Zustand maybe?
*/