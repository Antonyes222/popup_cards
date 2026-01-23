

export class PopupCard {
    public size: [number,number]
    public state: string = "open"
    public position: [number,number]
    public color: string
    public _children: Structure[] = []

    constructor(size: [number,number], position:[number,number], color: string = "white") {
        this.size = size
        this.position = position
        this.color = color
    }
    flipState() {
        if (this.state == "open"){
            this.state = "closed"
        } else if (this.state == "closed"){
            this.state = "open"
        } else {
            console.error("Card state isn't open or closed! WTF")
        }
    }
    changeSize(size:[number,number]) {
        this.size = size
    }
    changePosition(position:[number,number]) {
        this.position = position
    }
    addChild(structure: Structure) {
        this._children.push(structure)
    }
    removeChild(structure: Structure) {
        let toberemoved = this._children.indexOf(structure)
        this._children.splice(toberemoved,1)
    }
    get children(): readonly Structure[] {
        return (this._children)
    }
}

export class Structure {
    public size: [number,number]
    public position: [number,number]
    public type: string
    constructor(size: [number,number], position:[number,number], type: string) {
        this.size = size
        this.position = position
        this.type = type
    }
}

/* 
The big idea is that the Popup card will be first a base popup card, and then it will have children of the type of paper
addons, and those themselves can have children. I am not worrying about checking whether these addons are valid or not.
*/