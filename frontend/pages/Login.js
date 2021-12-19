import Footer from '../compnents/Layout/footer';
import Header from '../compnents/Layout/header';
export default function Login() {
    return (
<div>

<Header></Header>
<div className="center">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./css/main.css" />
  <div className="col-md-12 col-md-offset-2 form-card">
    <div className="form-group ">
      <form id="form" method="post">
      <div className="row">
  <div className="col-md-6 border-div">
    <container class="cont">
     <div>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
<br/>
<a href="#" class="nav-link ">Register</a><a>
  </a></div>

      <p>Browse and find what you need </p>
    </container>
  </div>
  
  <div className=" col-md-6 border-div ">
    <container border-div>
     <div>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
<br/>
  <a href="#" class="nav-link ">Sign In</a><h5>
  </h5></div>

      <p>Already have an account than welcome back</p>
    </container></div>
</div>
 
        <input type="text" name="email" placeholder="E-mail" required className="form-control " /><br />
        <input type="password" name="password" placeholder="Password" required className="form-control " /><br />
        <div className="divider">
        <input type="submit" defaultValue="Submit" className="btn btn-success bg-dark ml-12" id='bt-success' />
        </div>
       
      </form>
      
    </div>
    

 
    
  </div>
</div>
<Footer> </Footer>
</div>
    )
}
