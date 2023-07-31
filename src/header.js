

function Header(){
    return (
        <div>
            <img src = {require('./images/download.jpeg')} alt='logo2' height='100' width='300' className='logo' />
        <div className='maindiv'>
            <div className='navbar'>
              <ul >
                <li>Products <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></li>
                <li>For Teams <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></li>
                <li>Support </li>
              </ul>
            </div>
           
            <div className='navbar2'>
              <ul>
                <button>Try Now</button>
                {/* <li>Try Free</li> */}
                <li>Buy Now</li>
                <li>Login</li>
              </ul>
            </div>
                
        </div>
        </div>  
    )
}

export default Header;