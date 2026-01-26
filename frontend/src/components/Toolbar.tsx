


export default function Toolbar() {
    function test(): void{
        window.location.href = "https://www.youtube.com";
    }
    return(
    <nav className="justify-center fixed bottom-0 left-0 pointer-events-auto z-10">
        <ul>
            <li>
                <button className="cursor-pointer text-4xl hover:text-5xl">Add</button>
            </li>
            <li>
                <button className="cursor-pointer text-4xl hover:text-5xl">Remove</button>
            </li>
        </ul>
    </nav>
    )
}