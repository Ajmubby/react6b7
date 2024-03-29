import React from 'react'
import FruitCart from './FruitCart'
import Image from 'next/image'

export const fruits = [
  {store: "official store", name: "pears", price: 2.29, oldPrice: 4.5, description: ["Pears are sweet and juicy, making them a great choice for fresh snacks.", "They pair wonderfully with cheese and salads.", "Pears offer a delightful combination of sweetness and a touch of grittiness in every bite."], type: "Core", visual: <Image src={'/Pears.jpeg' } alt='pears' height={300} width={400} className='w-52' /> },

  {store: "official store", name: "grapes", price: 1.49, oldPrice: 4.5, description: ["Grapes are small and sweet, making them a delightful snack option.", "They can be enjoyed on their own or added to cheese platters.", "Grapes are a convenient and healthy choice for those looking for a quick and tasty treat."], type: "Berries", visual: <Image src={'/Grapes.jpeg' } alt='grapes' height={300} width={400} className='w-52'/> }, 

  {store: "official store", name: "guavas", price: 3.99, oldPrice: 7.5, description: ["Guavas are sweet and tropical, enjoyed fresh or in smoothies.", "They are a great source of vitamin C and bring a burst of exotic flavor to your palate.", "Guavas are a delightful tropical treat for those seeking a taste of the tropics."], type: "Tropical Fruits", visual: <Image src={'/guavas.jpeg' } alt='guavas' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "limes", price: 1.49, oldPrice: 4.5, description: ["Limes are tangy and essential for cocktails and cooking.", "They add a zesty and refreshing flavor to both beverages and dishes.", "Limes are a must-have for anyone looking to elevate their culinary creations."], type: "Citrus Fruits", visual: <Image src={'/Limes.jpeg' } alt='limes' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "apricots", price: 2.49, oldPrice: 7.5, description: ["Apricots are sweet and slightly tangy, making them perfect for jams and preserves.", "They can also be enjoyed fresh or dried as a healthy snack.", "Apricots bring a touch of sunshine to your palate."], type: "Pits", visual: <Image src={'/apricots.jpeg' } alt='apricots' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "cantaloupe", price: 3.99, oldPrice: 8.5, description: ["Cantaloupe is sweet and aromatic, perfect for fruit salads.", "This melon offers a burst of tropical flavor and pairs wonderfully with other fruits.", "Cantaloupe is a refreshing addition to your summertime gatherings."], type: "Melons", visual: <Image src={'/Cantaloupe.jpeg' } alt='cantoloupe' height={400} width={300} className='w-52'/> },

  {store: "official store", name: "watermelon", price: 1.99, oldPrice: 4.5, description: ["Watermelon is juicy and hydrating, perfect for picnics.", "It's a classic choice for summer gatherings and can be enjoyed in various forms.", "Watermelon adds a burst of refreshment to your outdoor activities."], type: "Melons", visual: <Image src={'/watermelon.jpeg' } alt='watermelon' height={400} width={300} className='w-52'/> },

  {store: "official store", name: "figs", price: 3.29, oldPrice: 6.5, description: ["Figs are sweet and seedy, great for desserts and preserves.", "They have a unique texture and flavor that pairs wonderfully with cheese and honey.", "Figs are a gourmet choice for those looking to elevate their culinary experiences."], type: "Tropical Fruits", visual: <Image src={'/figs.jpeg' } alt='figs' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "dates", price: 2.79, oldPrice: 5.58, description: ["Dates are sweet and chewy, ideal for snacking or baking.", "They are a natural source of sweetness and can be stuffed with various ingredients.", "Dates are a nutritious and delicious addition to your diet."], type: "Tropical Fruits", visual: <Image src={'/dates.jpeg' } alt='dates' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "mangoes", price: 2.99, oldPrice: 7.5, description: ["Mangoes are sweet and juicy, perfect for salsas and desserts.", "They are a tropical delight with a distinctive flavor and fragrance.", "Mangoes add a touch of the exotic to your culinary adventures."], type: "Tropical Fruits", visual: <Image src={'/Mangos.jpeg' } alt='Mango' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "blueberries", price: 3.49, oldPrice: 6.5, description: ["Blueberries are not only sweet but incredibly versatile.", "They are perfect for snacking and also ideal for baking, whether in muffins, pancakes, or pies.", "These little blue fruits are packed with antioxidants and bring a burst of flavor to your snacks and desserts."], type: "Berries", visual: <Image src={'/Blueberries.jpeg' } alt='blueberries' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "oranges", price: 1.99, oldPrice: 4.5, description: ["Oranges are juicy and packed with vitamin C, making them great for juicing.", "They add a burst of citrus flavor to your morning routine.", "Oranges are not only refreshing but also a nutritious choice."], type: "Citrus Fruits", visual: <Image src={'/orange.jpeg' } alt='orange' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "coconut", price: 3.49, oldPrice: 6.5, description: ["Coconut is rich and tropical, used in both sweet and savory dishes.", "It's a staple in many tropical cuisines and adds a unique flavor to your recipes.", "Coconut is a versatile ingredient for those looking to explore exotic tastes."], type: "Tropical Fruits", visual: <Image src={'/Coconut.jpeg' } alt='coconut' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "strawberries", price: 2.79, oldPrice: 5.5, description: ["Strawberries are juicy and versatile, making them ideal for a wide range of desserts.", "They pair wonderfully with chocolate, cream, and other fruits.", "Whether you're making a strawberry shortcake or adding them to your morning breakfast, they are a crowd-pleaser."], type: "Berries", visual: <Image src={'/Strawberry.jpeg' } alt='Strawberry' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "red raspberries", price: 4.29, oldPrice: 7.5, description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], type: "Berries", visual: <Image src={'/red raspberries.jpeg' } alt='redraspberries' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "bananas", price: 0.99, oldPrice: 5.5, description: ["Bananas are sweet and portable, perfect for snacking.", "They are a convenient source of energy and can be enjoyed on the go"],type: "Tropical Fruits", visual: <Image src={'/bananas.jpeg' } alt='bananas' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "apples", price: 0.29, oldPrice: 4.5, description: [" Apples are known for their sweet and slightly tart flavor profile, which can vary depending on the variety and ripeness. They are a good source of dietary fiber, vitamin C, and various antioxidants."], type: "Tropical Fruits", visual: <Image src={'/apples.jpeg' } alt='pples' height={300} width={400} className='w-52'/> },

  {store: "official store", name: "pineapples", price: 0.59, oldPrice: 5.5, description: [" Pineapples are known for their sweet and slightly tart flavor profile, which can vary depending on the variety and ripeness. They are a good source of dietary fiber, vitamin C, and various antioxidants."], type: "Tropical Fruits", visual: <Image src={'/pineapple.jpeg' } alt='pineapple' height={300} width={400} className='w-52'/>}
]
  
export default function Fruits() {

  return (
    <div><FruitCart fruits={ fruits }/></div>
  )
}
