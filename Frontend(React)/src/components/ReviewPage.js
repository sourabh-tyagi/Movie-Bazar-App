import React from 'react'
import { Link } from 'react-router-dom'
import './pages/ReviewPage.css'
import axios from 'axios';
import { useState } from 'react';
 

function ReviewPage() {

  
  let queryString = new URLSearchParams(window.location.search);
  var email = 'abc';
  email=queryString.get('email');
  var movie_id = '';
  var ratings =0;
   movie_id = queryString.get('movie_id');
   function displayRadioValue() {
    var ele = document.getElementsByName('rating');
      console.log(ele)
;    for(var i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            ratings = ele[i].value    ;
            console.log(ratings);    
        }
        
    }
}
const fnHandleSubmit = event => {
  event.preventDefault();
}
function rev(){
  console.log("clicked")
  displayRadioValue();

  var comment = document.getElementById('comment');
  console.log(comment.value);
  
  axios.post('http://localhost:8080/moviereview/rating/in',{
    "email":email,
    "ratings":ratings,
    "review":comment.value,
    "movie_id":movie_id

})
.then(response =>{console.log(response);if(response['data'] === 'Incorrect UserId Or MovieId'){
  alert(" You have already submitted the review");
  return;
}else{
  alert(" Review and Rating submitted Succesfully");
  return;
}} );
}

let tem = '/home?email=' +email;

  movie_id = queryString.get('movie_id');

  const [moviedata,setMovieData]=useState()
    
    const datafetch=(async()=>{
       

        const data=await fetch("/moviereview/rating/reviews?movie_id="+ movie_id)
  
  const res= await data.json()
  setMovieData(res.content)

    })
    datafetch()
 


  return (
    <>

  <div><h1 class="text-center" alt="Simple">Rate this movie</h1></div>
 
<div class="container">
        <div class="starrating risingstar d-flex justify-content-center flex-row-reverse">
            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star">5</label>
            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star">4</label>
            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star">3</label>
            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star">2</label>
            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star">1</label>
        </div>
  </div>

  <form id="feedback" onSubmit={fnHandleSubmit} data-toggle="validator" >
<h2 class="text-center" id="fh2">WE APPRECIATE YOUR REVIEW TOO!</h2>

 <div class="pinfo">Write your feedback.</div>
  

<div class="form-group">
  <textarea class="form-control" rows="5" id="comment" required></textarea>
</div>

 <button onClick={rev} type="submit" className="btn btn-success">Submit</button>
 <Link to={tem}><button type='submit' className='btn btn-primary'>Back to Home Page</button></Link>
 
 
</form>

<div className="text-center">


  <table className="table table-hover border-success table-info table-striped">
  <thead className='table-dark'>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Review</th>
    </tr>
  </thead>
  <tbody className='table-group-divider'>
  {
        moviedata?.map((res)=>{
            
            return(

    <tr>
      <th scope="row">{res.user_id}</th>
      <td>{res.review}</td>
    </tr>

            )
        })
    }
    
  </tbody>
</table>
  
        </div>
    

</>
  
  )
}

export default ReviewPage