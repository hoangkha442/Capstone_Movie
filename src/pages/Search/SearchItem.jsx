import React, { useEffect, useState } from 'react'
import Search from './Search'
import { useSearchParams } from 'react-router-dom'
import { movieService } from '../../services/movieService'
import CardItemSearch from './CardItemSearch'

export default function SearchItem() {
  const [searchParams, setSearchParams ] = useSearchParams()
  const [movie, setMovie] = useState([])
  // console.log('searchParams: ', searchParams.get('q'));
  useEffect(() => { 
    if(searchParams.get('q')){
      let searchValue = searchParams.get('q')
      movieService.findListFilm(searchParams.get('q'))
      .then((res) => { 
        setMovie(res.data.content)
      })
      .catch((err) => { 
        console.log('err: ', err);
      })
    }
  },[searchParams])
  const handlerRenderListCard = () => {
    return movie?.map((item, index) => {
      return <CardItemSearch key={index} item={item} />;
    });
  };
  return (
    <div className='dark-theme'>
      <div className="container-80">
        <Search />
        <div className="py-20">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-3 lg:gap-4 gap-4 py-3">
            {handlerRenderListCard()}
          </div>
        </div>
      </div>
    </div>
  )
}
