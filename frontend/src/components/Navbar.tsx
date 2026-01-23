


export default function Navbar() {
    return(
        <nav className=" fixed z-50 w-screen pointer-events-auto bg-transparent p-4 shadow-lg">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="text-black hover:text-gray-400">
                        Popup Cards
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-black hover:text-gray-400">
                        About
                    </a>
                </li>
                <li>
                    <a href="/create" className="text-black hover:text-gray-400">
                        Create
                    </a>
                </li>
            </ul>
        </nav>  
    )
}