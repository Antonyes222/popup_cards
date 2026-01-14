import { Grid } from "@react-three/drei"


export default function Floor() {
    return(
        <Grid
            args={[2,2]}
            infiniteGrid={true}
            fadeDistance={25}
            fadeStrength={5}
        />
    )
}