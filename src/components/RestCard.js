import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { restaurants } = props;
  const { avgRatingString, name, sla, cuisines, cloudinaryImageId, areaName } =
    restaurants?.info;

  return (
    <div className="rest-card w-52  overflow-hidden m-4  hover:scale-95 transition-transform">
      <div className="w-full h-40 rounded rounded-2xl overflow-hidden">
        <img
          className="w-full  h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="p-3">
        <div className="font-bold mb-2 inline-block truncate">{name}</div>
        <div className="flex items-center mb-2">
          <span className="pr-1 text-sm font-semibold mr-2">
            <i class="fa-solid fa-star mr-2 text-orange-400 "></i>
            {avgRatingString}
          </span>
          <span className="text-gray-600">{sla.slaString}</span>
        </div>
        <p className="text-gray-700 text-sm mb-2 truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-600">{areaName}</p>
      </div>
    </div>
  );
};

export default RestCard;
