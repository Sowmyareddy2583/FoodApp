import React ,{useState}from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ShowItems from '../../components/ShowItems/ShowItems'

const Home = () => {
  const [category,setCategory] = useState("ALL")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ShowItems category={category}/>
    </div>
  )
}

export default Home