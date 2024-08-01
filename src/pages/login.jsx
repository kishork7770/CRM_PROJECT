import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../styles/login.css"
function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [users, setUsers] = useState();
    const [apitoken, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const { handleLogin } = useOutletContext();
    const navigate = useNavigate();
    useEffect(() => {
        fetchUser();
    }, []);
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/users');
            setUsers(data);
            console.log(data);
        } catch (error) {
            console.log("Error")
        }
    };

    const login = async (data) => {
        try {
            console.log("hello");
            const isUserExsist = users.find(user => user.email === data.email && user.password === data.password);
            if (isUserExsist) {
                navigate("/home");
                handleLogin();
                localStorage.setItem('user', JSON.stringify(isUserExsist));
            }
            else {
                console.log("Invalid user and password");
            }
        } catch (error) {
            console.log("Error");
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <div className="main grid grid-cols-2">
                    <div className="flex justify-center mt-24">
                        <div className="">
                            <div>
                                <img className="mx-16 my-10" src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="" />
                            </div>
                            <div className="card py-10 px-10 w-96 rounded-lg bg-white-600">
                                <h6>USER NAME</h6>
                                <input {...register('email')} className=' w-full mt-2 mb-5 h-10 rounded' type="text" id="email" />
                                <h6>Password</h6>
                                <input {...register('password')} className='w-full mt-2 mb-5 h-10 rounded' id="password" type="password" style={{ marginBottom: "15%" }} />
                                <div>
                                    <button type="submit" className='bg-blue-500 text-white py-2 px-2 rounded hover:bg-sky-700'>Login</button>
                                </div>
                                <Link to='/register' className="flex justify-center text-blue-700 m-1  ">Create Account?</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div>
                            <div className=''>
                                <h1 className="mt-10 ">Manage all you customers data in one place</h1>
                                <img src="src\assets\focus-crm-module-2024.webp" alt="" width={500} />
                            </div>
                        </div>

                    </div>
                </div>

            </form>

        </div>
    )
}

export default Login;