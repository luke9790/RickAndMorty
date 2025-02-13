function Card({ character }) {
  if (!character) {
    // oppure puoi renderizzare un placeholder o un messaggio di errore
    return <div>Character data not available</div>;
  }
  
  const { name, image, status, species, location } = character;
  const statusColor = {
    alive: "text-green-500",
    dead: "text-red-500",
    unknown: "text-gray-900",
  };

  return (
    <div className="bg-gray-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        className="w-full flex-grow-0"
        src={image}
        alt={`Portrait of ${name}`}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="p-4 bg-blue-gray-800 text-white flex-grow">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className={`${statusColor[status.toLowerCase()]} flex items-center mt-2`}>
          <span className="h-3 w-3 rounded-full bg-current inline-block mr-2"></span>
          {status} - {species}
        </p>
        <p className="text-sm mt-1">Last Location: {location?.name || "Unknown"}</p>
      </div>
    </div>
  );
}

export default Card;
