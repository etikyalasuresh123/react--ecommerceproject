
import './Home.css';

function Home (){
    return (
        <>
        <div><br></br><br></br>
            <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/image1.jpg" alt="Los Angeles" className="d-block"
                            style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="images/image2.jpg" alt="Chicago" className="d-block"         
                            style={{ width: "100%"  }} />
                    </div>
                    <div className="carousel-item">
                        <img src="images/image3.jpg" alt="New York" className="d-block"
                            style={{ width: "100%" }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            
            </div><br></br>
            <div class="block2">
              <h1>The Next</h1>
              <p1>We bring you powerful advantages to <br></br>navigate your digital transformation</p1>
              </div><br></br><br></br>

              <div class="zoom">
            <img src="images/image4.jpg" alt="Chicago" width="1050" height="400"></img>

        </div><br></br><br></br>
        <div class="block4">
            <h2 > Our Purpose:</h2>
            <h6>To amplify human potential and create the next opportunity for people,<br></br> businesses and communities</h6>

        </div><br></br><br></br>
        <div>
        <h2 > About US </h2>
        <h6>A global leader in next-generation digital <br></br>services and consulting</h6>

        </div><br></br><br></br>

        <div >

        <span class="rounded"><img src="images/image5.avif" alt="Girl in a jacket" width="190" height="200"></img></span>
              <span class="rounded"><img src="images/image6.avif" alt="Girl in a jacket" width="190" height="200"></img></span>
                <span class="rounded"><img src="images/image7.avif" alt="Girl in a jacket" width="190" height="200"></img></span>
                 <span class="rounded"><img src="images/image8.avif" alt="Girl in a jacket" width="190" height="200"></img></span>
             
                 </div><br></br><br></br>

                 <div className='footerpage'>
                 <footer class="text-center text-red" >
 
  
 

 
  <div className="text-center text-dark p-3">
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>
                 </div>

            </div>
        </>
    )
}

export default Home;