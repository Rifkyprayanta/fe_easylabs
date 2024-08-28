import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');

    const [validation, setValidation] = useState([]);

    const navigateTo = useNavigate();

    useEffect(() => {

        const checkToken = () => {
            if(localStorage.getItem('token')) {

                //redirect page dashboard
                navigateTo('/dashboard');
            }
        }
        //check token
        checkToken();
    }, []);

    
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('nip_pegawai', nip);
        formData.append('password', password);

        await axios.post('http://103.196.153.28/api/login', formData)
        .then((response) => {
            //set token on localStorage
            localStorage.setItem('token', response.data.data.token);
            //redirect to dashboard
            console.log(response.data.data)
            navigateTo('/dashboard');

            })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    
    }

  return (
    <div>
       <div className='main-wrapper'>
       <div className="page-wrapper full-page">
			<div className="page-content d-flex align-items-center justify-content-center">
				<div className="row w-100 mx-0 auth-page">
					<div className="col-md-8 col-xl-6 mx-auto">
						<div className="card">
							<div className="row">
                                <div className="col-md-4 pe-md-0">
                                <div className="auth-side-wrapper">
                                </div>
                                </div>
                                <div className="col-md-8 ps-md-0">
                                <div className="auth-form-wrapper px-4 py-5">
                                    <a href="#" className="noble-ui-logo d-block mb-2">Easy<span>Labs</span></a>
                                    <h5 className="text-muted fw-normal mb-4">Selamat Datang di Sistem Laboratiorium.</h5>
                                    <form className="forms-sample" method="POST" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userNip" className="form-label">NIP Pegawai</label>
                                        <input type="text" className="form-control" id="userNip" placeholder="Masukkan NIP Pegawai" value={nip} onChange={(e) => setNip(e.target.value)}/>
                                    </div>
                                    {
                                        validation.nip && (
                                            <div className="alert alert-danger">
                                                {validation.nip[0]}
                                            </div>
                                        )
                                    }
                                    <div className="mb-3">
                                        <label htmlFor="userPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="userPassword" autoComplete="current-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    {
                                        validation.password && (
                                            <div className="alert alert-danger">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="authCheck"/>
                                        <label className="form-check-label" htmlFor="authCheck">
                                        Remember me
                                        </label>
                                    </div>
                                    <div>
                                      
                                        <button type="submit" className="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                                        Login
                                        </button>
                                    </div>
                                    <a href="register.html" className="d-block mt-3 text-muted">Not a user? Sign up</a>
                                    </form>
                                </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>

			</div>
		</div>
       </div>
    </div>
  )
}

export default Login