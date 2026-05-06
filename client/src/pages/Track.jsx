const Track = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="http://localhost:4000"
        title="Trakio Map"
        className="w-full h-full border-0"
        allow="geolocation"
      ></iframe>
    </div>
  );
};

export default Track;