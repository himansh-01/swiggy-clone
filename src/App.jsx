import Header from '../src/components/Header'
import Category from './components/Category';
import Card from './components/Card';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

  const arr1 = ["Palda", "Kelod Kartal", "Dudhia", "Jhalaria"];
  const arr2 = ["Sivani", "Kanadia", "Bhatkhedi", "Tihi"];
  const arr3 = ["Atawda", "Chhadoda", "Hasalpur"];
  const arr4 = ["Afghani Restaurants", "American Restaurants", "Andhra Restaurants", "Arabian Restaurants"];
  const arr5 = ["Asian Restaurants", "Awadhi Restaurants", "Bakery Restaurants", "Barbecue Restaurants"];
  const arr6 = ["Bengali Restaurants", "Beverages Restaurants", "Bihari Restaurants"];
  const arr7 = ["Pavino Vada Pav And Cafe", "Agrawal Ice Cream", "The Biryani Life", "Shree leela Restaurant"];
  const arr8 = ["Sandwich Story", "Sweet Truth - Cake and Desserts", "Faasos - Wraps & Rolls", "Dev's Bakery"];
  const arr9 = ["Food Costa", "Tinku's", "Dhaba Singh"];

function App() {
  return (
    <>
      <Header/>
      <Category />
      <Card />
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png'
      className='w-[100vw] mt-7'/>
      <Bottom arr1={arr1} arr2={arr2} arr3={arr3} x={0} />
      <Bottom arr1={arr4} arr2={arr5} arr3={arr6} x={1}/>
      <Bottom arr1={arr7} arr2={arr8} arr3={arr9} x={2}/>
      <Footer />
    </>
  );
}

export default App;
