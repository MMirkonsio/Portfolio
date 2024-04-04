const Background = () => {
  return (
    <div className="absolute inset-0 object-cover w-full h-full -z-10">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Background;
