

import CanvasLayout from '../layouts/CanvasLayout.tsx'

import DefaultScene from '../scenes/DefaultScene.tsx'

export default function Home(){
    return(
        <CanvasLayout scene={DefaultScene}>
            <h1 className=" justify-center fixed top-1/2 left-1/2 z-10 text-4xl font-bold text-black -translate-x-1/2 -translate-y-1/2 pointer-events-none">Hello! This website helps you create and share pop-up designs.</h1>
        </CanvasLayout>
    )
}
