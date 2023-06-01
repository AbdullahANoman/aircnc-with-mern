import React, { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(rooms);
  useEffect(() => {
    setLoading(true);
    fetch("Rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const remainData = data.filter((item) => item.category === category);
        if (category) {
          setRooms(remainData);
          setLoading(false);
        } else {
          setRooms(data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);
  console.log(rooms);
  if (rooms.length == 0) {
    return (
      <div className="mt-12">
        <Heading
          title={"No Rooms Available in this category"}
          subtitle={"Please select other categories"}
          center={true}
        ></Heading>
      </div>
    );
  }
  return (
    <Container>
      <>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5 2xl:grid-cols-6">
            {rooms.map((room, index) => (
              <Card key={index} room={room}></Card>
            ))}{" "}
          </div>
        )}
      </>
    </Container>
  );
};

export default Rooms;
