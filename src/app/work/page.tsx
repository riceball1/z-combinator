import Nav from "../components/ui/Nav"

export default function Work() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200">
                <Nav />
            </header>
            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-16">

                <h1>Work at a Startup</h1>
            </main>
        </div>
    )
}