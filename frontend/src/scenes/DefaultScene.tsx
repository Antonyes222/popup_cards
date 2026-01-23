
import Lights from '../objects/Lights.tsx'
import Floor from '../objects/Floor.tsx'
import Cube from '../objects/Cube.tsx'

export default function DefaultScene({}) {
    return (
        <>
            <Lights/>
            <Cube/>
            <Floor/>
        </>
    )
}