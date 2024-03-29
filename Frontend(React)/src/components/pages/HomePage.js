import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { SignOutIcon, InfoIcon } from '@primer/octicons-react';
import BackgroundImage from '../../assets/images/mo1.jpg'


export default function HomePage() {
  let queryString = new URLSearchParams(window.location.search);
  var email = 'abc';
  email=queryString.get('email');

  const [moviedata,setMovieData]=useState()
    
    const datafetch=(async()=>{
       
        const data=await fetch("/moviereview/movies")
  
  const res= await data.json()
  setMovieData(res.content)

    })
    datafetch()
    return (
      
        <header style={ HeaderStyle }>
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome {email} <i class="bi bi-person-check"></i></h1>
            <h3 className="line">Here are the list of movies you can review <i class="bi bi-emoji-laughing"></i></h3>

            <form className="hi">
            <table class="table">
  <thead>
    <tr>
    
      <th scope="col">Movie Name <i class="bi bi-film"></i></th>
      <th scope="col">Release Year <InfoIcon size={20} /></th>
      <th scope="col">Available On <i class="bi bi-collection-play-fill"></i></th>
      <th scope='col'>Rating(out of 5) <i class="bi bi-star-half"></i></th>
    </tr>
  </thead>
  <tbody>
  {
        moviedata?.map((res)=>{
            let temp = '/review?movie_id='+res.movie_id+'&email=' + email;
            return(

    <tr>

      <Link to={temp}><td>{res.title}</td></Link>
      <td>{res.yearOfRelease}</td>
      <td>{res.available}</td>
      <td>{res.overAllRating}</td>
    </tr>

            )
        })
    }
  </tbody>
</table>
</form>

            <Link to="/">
                <button className="primary-button">Log out <SignOutIcon size={24} /></button>
            </Link>
        </div>
      </header>
    )
}
const HeaderStyle = {
  width: "100%",
  height: "51vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
