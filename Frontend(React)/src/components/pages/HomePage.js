import React, {useState} from 'react'
import { Link } from 'react-router-dom'




export default function HomePage() {
  
  let queryString = new URLSearchParams(window.location.search);
  var email = 'abc';
  
  email=queryString.get('email');
  console.log(email);
  const [moviedata,setMovieData]=useState()
    
    const datafetch=(async()=>{
       

      
        const data=await fetch("/moviereview/movies")
  
  const res= await data.json()
  setMovieData(res.content)

   

  
    })
    datafetch()
    return (
      
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome {email}</h1>
            <h3>Here are the list of movies you can review</h3>
            


            <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Movie Name</th>
      <th scope="col">Release Year</th>
      <th scope="col">Available On</th>
      <th scope='col'>Rating(out of 5)</th>
    </tr>
  </thead>
  <tbody>
  {
        moviedata?.map((res)=>{
            let temp = '/review?movie_id='+res.movie_id+'&email=' + email;
            return(

    <tr>
      <th scope="row">{res.movie_id}</th>

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

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
