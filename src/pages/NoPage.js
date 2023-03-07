const NoPage = () => {
    return (
<div class="container col-md-6">
	<br /><br /><br /><br /><br />
    <div class="row">
    <div class="error-template">
	    <h1>Oops!</h1>
	    <h2>404 Not Found</h2>
	    <div class="error-details">
		Sorry, an error has occured, Requested page not found!<br /><br /><br />
	    </div>
	    <div class="error-actions">
		<a href="/" class="btn btn-primary">
		    Take Me Home </a>&nbsp; 
		<a href="/" class="btn btn-primary">
		    Contact Support </a>
	    </div>
	</div>
    </div>
</div>
    )
  }
  
  export default NoPage;