import globe from "./assets/globe.png"

export default function Header() {
    return (
        <header>
            <img src={globe} alt="Globe" />
            <h1 className="header-heading">my travel journal.</h1>
        </header>
    )
}