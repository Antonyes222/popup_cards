
import { PopupCard, Structure } from './cardData.ts'
import * as THREE from 'three'

type PopupCardProps = {
    popupcard: PopupCard
}
export default function Card({popupcard}: PopupCardProps) {
    function createStructure(structure: Structure) {
        /* Create a 3d Model of the Structure.*/
        return(
            <> TBD</>
        )
    }
    function changeState(){
        return 1
        
    }

    return(
        <group>
            <group>
                <mesh position={[-0.25*popupcard.size[0],0,popupcard.position[1]]} rotation={[-Math.PI/2,0,0]}>
                    <planeGeometry args={[0.5*popupcard.size[0],popupcard.size[1]]} />
                    <meshStandardMaterial side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0.25*popupcard.size[0],0,popupcard.position[1]]} rotation={[-Math.PI/2,0,0]}>
                    <planeGeometry args={[0.5*popupcard.size[0],popupcard.size[1]]} />
                    <meshStandardMaterial side={THREE.DoubleSide}/>
                </mesh>
            </group>
            <group>
                --Put Children here, and another group for their children, etc.
            </group>
        </group>
    )
}

/* The purpose of this is to turn the carddata into an R3F mesh. MAKE DO WITHAT!*/ 