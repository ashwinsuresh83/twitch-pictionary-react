import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import '../css/home.css'

const Home=()=>  {
    const [twitch_name, setTwitch] = useState('');
    const changeHandler=(e)=>{
        setTwitch(e.target.value);
        console.log(twitch_name);
    }
 

    
    return (
        <div className="home__page">
            <div class="container">
    <h2 class="ecn">Enter your Twitch channel name:</h2>
    <div class="input-group mb-3">

        <input onChange={e=>changeHandler(e)} type="text" name="stream" class="form-control stream__name" placeholder="stream name" name="query"
            aria-describedby="button-addon1"/>
        <button  class="btn btn-dark set-twitch" type="button" id="button-addon1">Wokaay</button>
    
    </div>

</div>

<div class="container">

    <h3 class="cate">Different Categories: Custom input:</h3>

    <div class="text-center">
        <Link to={"/game/"+twitch_name}>
        <a href="/game/{twitch_name}" class="btn btn-dark">Lets go</a>
        </Link>
    </div>

</div>


<div data-spy="scroll" data-target="#navId">
    
    <div id="navId">
        <ul class="nav nav-tabs" role="tablist">
            
        </ul>
    </div>
    
</div>
</div>
        )
    }
export default Home
    

