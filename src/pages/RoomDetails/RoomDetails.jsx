import React from 'react';
import Header from '../../components/Header/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';

const RoomDetails = () => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-7 gap-10 mt-6'>
                <div className="col-span-4">
                <RoomInfo ></RoomInfo>
                </div>
                <div className='col-span-3'>Resevation</div>
            </div>
        </div>
    );
};

export default RoomDetails;