import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

import { Suspense } from 'react'

interface CanvasLayoutProps{
    scene: React.FC,
    children: React.ReactNode
}

export default function CanvasLayout({scene: Scene, children}: CanvasLayoutProps) {
    return(
        <div className="fixed inset-0 w-screen h-screen z-0">
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }} className="w-full h-full">
                <OrbitControls/>
                <Suspense fallback={null}>
                    <Scene/>
                </Suspense>
            </Canvas>
            <div className='fixed-inset-0 top-0 z-10 pointer-events-none'>
                {children}
            </div>
        </div>
    )
}