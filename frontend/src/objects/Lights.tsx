
export default function Lights() {
    return(
    <>
        <ambientLight intensity={0.3}/>
        <directionalLight intensity={0.7} position={[0, 5, 0]}/>
    </>
    )
}