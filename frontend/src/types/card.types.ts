
export type CardState = "open" | "closed"

export interface CardDataInterface {
    size: [number,number]
    position:[number,number,number]
    color?: string
    children?: StructureDataInterface[]
}

export interface StructureDataInterface {
    size: [number,number]
    position: [number,number]
    children?: StructureDataInterface[]
}

export interface VFoldStructure extends StructureDataInterface {
    angle: [number,number]
}

