import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__Wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside
              the Waitakere Ranges"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of New Zealand in a Private Cruise"
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Tasman Sea visiting Uncharted Waters"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Mount Eden Summit"
              label='Luxury'
              path='/services'
            />

            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sand Dunes on a guided Northland tours"
              label='Luxury'
              path='/services'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
