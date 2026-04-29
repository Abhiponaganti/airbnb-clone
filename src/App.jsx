import { useState } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Card from "./components/Card";
import { listings } from "./data/listings";

function App() {
  const [search, setSearch] = useState("");

  // Filter logic
  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      {/* Search Input */}
      <div className="max-w-6xl mx-auto p-4">
        <input
          type="text"
          placeholder="Search places..."
          className="w-full border p-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Categories />

      {/* Cards */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredListings.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;