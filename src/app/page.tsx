import Nav from "./components/ui/Nav";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <Nav />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            We fund startups
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Z Combinator provides seed funding for startups. We fund companies twice a year in batches.
          </p>
          <div className="space-x-4">
            <Button text="Apply Now" isPrimary />
            <Button text="Learn More" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-800 mb-2">3,000+</div>
            <div className="text-gray-600">Companies funded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-800 mb-2">$100B+</div>
            <div className="text-gray-600">Combined valuation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-800 mb-2">2x/year</div>
            <div className="text-gray-600">Batch frequency</div>
          </div>
        </section>

        {/* Recent News Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Recent News</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-black mb-2">
                <a href="#" className="hover:text-green-800">New batch of startups announced</a>
              </h3>
              <p className="text-gray-600 text-sm">January 15, 2024</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-black mb-2">
                <a href="#" className="hover:text-green-800">Z Combinator partners with leading VCs</a>
              </h3>
              <p className="text-gray-600 text-sm">January 10, 2024</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-black mb-2">
                <a href="#" className="hover:text-green-800">Startup school opens for applications</a>
              </h3>
              <p className="text-gray-600 text-sm">January 5, 2024</p>
            </div>
          </div>
        </section>

        {/* Featured Companies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8">Notable Companies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Airbnb', 'Stripe', 'Dropbox', 'Reddit', 'Twitch', 'Coinbase'].map((company) => (
              <div key={company} className="p-4 border border-gray-200 rounded hover:border-green-300 transition-colors">
                <div className="text-lg font-semibold text-black">{company}</div>
                <div className="text-sm text-gray-600">Z Combinator Alumni</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-800">Core Program</a></li>
                <li><a href="#" className="hover:text-green-800">Startup School</a></li>
                <li><a href="#" className="hover:text-green-800">Bookface</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-800">Library</a></li>
                <li><a href="#" className="hover:text-green-800">Blog</a></li>
                <li><a href="#" className="hover:text-green-800">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-800">About</a></li>
                <li><a href="#" className="hover:text-green-800">Team</a></li>
                <li><a href="#" className="hover:text-green-800">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-800">Twitter</a></li>
                <li><a href="#" className="hover:text-green-800">LinkedIn</a></li>
                <li><a href="#" className="hover:text-green-800">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; 2025 Z Combinator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}