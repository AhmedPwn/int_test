import React , {useState,useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination'

function App() {

  let cancel
  const [pokemon,setPokemon] = useState([])
  const [currentPage,setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPage,setPrevPage] = useState()
  const [nextPage,setNextPage] = useState()
  const [loading,setLoading] = useState(true)

  useEffect ( ()=>{
    setLoading(true)
    axios.get(currentPage,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res=>{
      setLoading(false)
      console.log('called')
      setPrevPage(res.data.previous)
      setNextPage(res.data.next)
      setPokemon(res.data.results.map(p=>p.name))
  })
  return () => cancel()

  },[currentPage])

  function goPrevPage(){
    setCurrentPage(prevPage)
  }
  function goNextPage(){
    setCurrentPage(nextPage)
  }


  if (loading) 
  return "Loading..." 

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
      goPrevPage={prevPage ? goPrevPage : null} 
      goNextPage={nextPage ? goNextPage : null }
      
       /> 
    </>
  );
}

export default App;
