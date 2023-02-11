import React, { useContext, useEffect, useState } from 'react'
import Categories from '../../components/header/Categories'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import { Context } from '../../Context'
import CategoriesImage from './CategoriesImage'
import TodaysItem from './TodaysItem'
import imagess from './thegame.png'
import TopSelling from './TopSelling'
import { generateRandomNumber } from '../../utils'
import ClickSlider from '../../components/slider/ClickSlider'

function Home() {
  const {categories, products} = useContext(Context);
  const [todayItemIndex, setTodayItemIndex] = useState([]);
  console.log(todayItemIndex);

  const categoryItem = categories.map(item => {
    return(
      <CategoriesImage key={item.id} img={item.image} name={item.name} />
    )
  })

  useEffect(() => {
  }, [])

  const todayItem = generateRandomNumber(6, products).map(item => {
    return(  
      <TodaysItem 
        key={item.id}
        name={item.title}
        img={item.images[0]}
        amount={item.price}
        percent={Math.floor((Math.random() * 50) + 1)}
      />
    )
  })

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
              {todayItem}
            </ul>
          </section>
          <section className='rounded overflow-hidden'>
            <h5 className='title'>Top selling items</h5>
            <ul className='bg-white p-4 text-black'>
              <ClickSlider />
            </ul>
          </section>
        </div>
    </div>
  )
}

export default Home
