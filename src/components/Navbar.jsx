function Navbar() {
  return (
    <div className="w-full shadow-md">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-red-500">Airbnb</h1>

        {/* Search */}
        <div className="border px-4 py-2 rounded-full shadow-sm">
          Anywhere | Any Week | Add Guests
        </div>

        {/* Profile */}
        <div className="border px-4 py-2 rounded-full flex items-center gap-2">
          ☰ 👤
        </div>

      </div>
    </div>
  );
}

export default Navbar;