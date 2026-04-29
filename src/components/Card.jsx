import { useState } from "react";

function Card({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="cursor-pointer hover:shadow-lg p-2 rounded-xl relative">

      {/* ❤️ Heart Button */}
      <div
        className="absolute top-3 right-3 text-xl cursor-pointer"
        onClick={() => setLiked(!liked)}
      >
        {liked ? "❤️" : "🤍"}
      </div>

      <img
        src={item.image}
        alt={item.title}
        className="rounded-xl w-full h-60 object-cover hover:scale-105 transition duration-300"
      />

      <div className="mt-2">
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-gray-500">{item.price}</p>
        <p>⭐ {item.rating}</p>
      </div>

    </div>
  );
}

export default Card;