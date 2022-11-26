import React, { useContext, useState } from 'react'
import Categories from '../../components/header/Categories'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import { Context } from '../../Context'
import CategoriesImage from './CategoriesImage'
import TodaysItem from './TodaysItem'

import imagess from './thegame.png'
import TopSelling from './TopSelling'

function Home() {
  const {categories, products} = useContext(Context);
  const [todayItemIndex, setTodayItemIndex] = useState([]);

  const categoryItem = categories.map(item => {
    return(
      <CategoriesImage key={item.id} img={item.image} name={item.name} />
    )
  })

  // function generateRandomNumber(length, callBack){
  //   let i = 0
  //   while(i < length ){
  //     const random = Math.floor((Math.random() * products.length) + 1)
  //     callBack(prevState => {
  //       [...prevState, random]
  //       i++
  //       console.log(todayItemIndex)
  //     })
  //   }
  // }

  // generateRandomNumber(6, setTodayItemIndex);

  // const todayItem = products.map(item => {
  //   if()
  //   return(
      
  //   )
  // })

  return (
    <div>
        <Header />
        <Categories />
        <div className="container mx-auto">
          <Slider />
          <div className='flex bg-white mt-4 rounded justify-around overflow-y-hidden overflow-x-scroll'>
            {categories.length ? categoryItem :
              <CategoriesImage />
            }
          </div>
          <section className='rounded overflow-hidden'>
            <h3  className='title'>Today's Deals</h3>
            <ul className='grid grid-cols-3 gap-4 bg-white p-4'>
                
            </ul>
          </section>
          <section>
            <h5 className='title'>Top selling items</h5>
            <ul>
              <TopSelling 
                 name ="Aluminum foil use for hydraulic machines" 
                 img = {imagess}
                 amount ={2000} 
                 percent={30}
              />
            </ul>
          </section>
        </div>
    </div>
  )
}

export default Home
