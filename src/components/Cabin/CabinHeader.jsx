import React from "react";
import { useSearchParams } from "react-router-dom";

const Tags = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "Checked out",
    value: "checked-out",
  },
  {
    id: 3,
    name: "Checked in",
    value: "checked-in",
  },
  {
    id: 4,
    name: "Unconfirmed",
    value: "unconfirmed",
  },
];

function CabinHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const discount = searchParams.get("discount") || "all";

  React.useEffect(() => {
    searchParams.set("discount", discount);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, discount]);

  function toggleDiscount(discount) {
    setSearchParams({
      discount,
    });
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-2xl ">All cabins</h1>
      <div className="flex items-center gap-4">
        <div className="bg-white flex gap-2 rounded-md py-1  px-2 text-sm cursor-pointer">
          {Tags.map((tag) => (
            <span
              key={tag.id}
              onClick={() => toggleDiscount(tag.value)}
              className={`${
                discount === tag.value && "bg-blue-700 text-white"
              } py-1 px-2 hover:text-white rounded-md   hover:bg-blue-700 duration-200`}>
              {tag.name}
            </span>
          ))}
        </div>
        {/* Selected Section */}
        Selected
      </div>
    </div>
  );
}

export default CabinHeader;
