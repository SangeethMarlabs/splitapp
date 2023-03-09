function Home(){
    if(localStorage.getItem('userName') !== 'Guest'){
        return ( 
            <div className="container col-md-12 mt-3">
                 <h1 style={{color: "#414141"}}>Welcome to Split App</h1>
                 <img class="col-md-12" src="./Image/home.jpg" alt=""></img>                  
            </div>        
        )
    }else{
        return ( 
            <div className="container col-md-12 mt-3">
                 <h1 style={{color: "#414141"}}>Please login to use the Application</h1>                
            </div>        
        )
    }
}
  export default Home;