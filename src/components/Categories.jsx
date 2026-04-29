function Categories() {
  const items = [
    "Beach",
    "Rooms",
    "Cabins",
    "Trending",
    "Amazing Views",
    "Pools",
    "Farms",
    "Islands",
  ];

  return (
    <div className="flex gap-6 overflow-x-auto p-4 border-b">
      {items.map((item, index) => (
        <div key={index} className="text-center cursor-pointer">
          <div className="text-2xl">🏠</div>
          <p className="text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
