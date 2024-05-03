function Header() {
  return (
    <header className="bg-transparent w-4/5 mx-auto">
      <div className="max-w-screen-2xl mx-auto px-1 lg:px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start">
            <a href="/" className="text-lg font-semibold text-white">
              Rick and Morty Web App
            </a>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="/contact"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
