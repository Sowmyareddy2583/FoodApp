import React ,{useState}from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ShowItems from '../../components/ShowItems/ShowItems'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home = () => {
  const [category,setCategory] = useState("ALL")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ShowItems category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home