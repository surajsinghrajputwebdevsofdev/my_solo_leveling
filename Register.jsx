import React from 'react'
import '/src/allpages/auth/authcss/Register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <div class="wrapper">
                <div class="container">
                    <div class="col-left">
                        <div class="login-text">
                            <h2>𝕽𝖊𝖘𝖙𝖆𝖗𝖙</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros dapibus, ultricies tellus vitae, consectetur tortor. Etiam rutrum placerat
                            </p>
                            <Link to="/login" style={{ color: 'black' }} className='text-black'><a class="btn" href="">𝕷𝖊𝖛𝖊𝖑 up</a></Link>
                           
                        </div>
                    </div>
                    <div class="col-right">
                        <div class="login-form">
                            <h2>𝕰𝖓𝖙𝖊𝖗</h2>
                            <form>
                                <p>
                                    <input type="text" placeholder="𝙁𝙪𝙡𝙡 𝙉𝙖𝙢𝙚.." required />
                                </p>
                                <p>
                                    <input type="number" placeholder="𝘼𝙜𝙚.." required />
                                </p>
                                <p>
                                    <input type="email" placeholder="𝙀𝙢𝙖𝙞𝙡.." required />
                                </p>
                                <p>
                                    <input type="password" placeholder="𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙.." required />
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

export default Register