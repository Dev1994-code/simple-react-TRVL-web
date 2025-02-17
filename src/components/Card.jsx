import React from 'react'
import { CardItem } from './CardItem'
import "./cards.css"

export const Card = () => {
  return (
    <div className='cards'>
        <h1>Check out these Epic Destinations</h1>
        <div className='cards__container'>
            <div className='cards-wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through the Island of Bali in a private cruise"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src="images/img-3.jpg"
                        text="set sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="peace"
                        path="/services"
                    />
                    <CardItem 
                        src="images/img-8.jpg"
                        text="Ride through the Sahara Desert on a guided Camel tour"
                        label="Luxury"
                        path="/services"
                    />
                    <CardItem 
                        src="images/img-4.jpg"
                        text="Experiance Football on Top of the Himilayan Mountains"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}
