import queryString from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ item }) => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const value = params.get("category");

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: label,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };
  const { label, icon: Icon } = item;
  return (
    <div onClick={handleClick} className="flex  flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
      <Icon size={26}></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
