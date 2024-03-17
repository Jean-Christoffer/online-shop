interface RatingProps {
  number: number;
  index: number;
}

const GetRatings: React.FC<RatingProps> = ({ number, index }) => {
  let ratings = number;

  const getStarType = (index: number, rating: number) => {
    const floorRating = Math.floor(rating);
    if (index < floorRating) {
      return "full";
    }
    if (index === floorRating && rating % 1 !== 0) {
      return "half";
    }
    return "empty";
  };
  const starType = getStarType(index, ratings);
  return (
    <>
      <div className="relative w-4 h-4 ">
        <svg
          className={`absolute inset-0 ${
            starType !== "full" ? "text-gray-300" : "text-yellow-300"
          }`}
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>

        {starType === "half" && (
          <svg
            className="absolute inset-0 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 22 20"
            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        )}
      </div>
    </>
  );
};
export default GetRatings;
