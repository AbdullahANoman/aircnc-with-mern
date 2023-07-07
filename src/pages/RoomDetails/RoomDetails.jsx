import React from 'react';
import Header from '../../components/Header/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';

const RoomDetails = () => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-10 mt-6'>
                <div className="md:col-span-5">
                <RoomInfo ></RoomInfo>
                </div>
                <div className='md:col-span-2 order-first md:order-2'>
                    <RoomReservation></RoomReservation>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;