import React, { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Loader/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(rooms);
  useEffect(() => {
    setLoading(true);
    fetch("Rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cols-5 2xl:grid-cols-6">
            {rooms.map((room) => (
              <Card room={room}></Card>
            ))}{" "}
          </div>
        )}
      </>
    </Container>
  );
};

export default Rooms;
