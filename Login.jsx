import React from 'react';
import '/src/allpages/auth/authcss/Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
<div class="wrapper">
  <div class="container">
    <div class="col-left">
      <div class="login-text">
        <h2>𝕽𝖊𝖘𝖙𝖆𝖗𝖙</h2>
        <p>
        Not a member? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros dapibus, ultricies tellus vitae, consectetur tortor. Etiam rutrum placerat
        </p>
        <Link to="/register" style={{ color: 'black' }} className='text-black'><a class="btn" href="">𝕷𝖊𝖛𝖊𝖑 up</a></Link>

      </div>
    </div>
    <div class="col-right">
      <div class="login-form">
        <h2>𝕰𝖓𝖙𝖊𝖗</h2>
        <form>
          <p>
            <input type="text" placeholder="𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊.." required/>
          </p>
          <p>
            <input type="password" placeholder="𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉.." required/>
          </p>
          <p>
            <input class="btn" type="submit" value="𝐈𝐍" />
          </p>
          {/* <p>
            <a href="">Forget password?</a>
            <a href="">Create an account.</a>
          </p> */}
        </form>
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Login