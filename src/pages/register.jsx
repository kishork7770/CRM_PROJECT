import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
function Register() {
    const { register, handleSubmit, watch, formState: { error } } = useForm();

    const registerUser = () => {

    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <div className="main ">
                <div className="flex justify-center ">
                    <div className="text-center">
                        <div className="mt-10 mb-5 ">
                            <h1 className="w-full">REGISTERATION PAGE</h1>
                        </div>
                        <div className="m-7 w-full rounded-lg bg-white-600">
                            <div className="card grid grid-cols-2 m-7 p-10 rounded ">
                                <div className="m-5">
                                    <h6 className="">Name</h6>
                                    <input {...register('name')} className='w-full mb-5 h-10 rounded' placeholder="Name" type="text" id="name" />
                                    <h6 className="">Email</h6>
                                    <input {...register('email')} className='w-full mb-5 h-10 rounded' placeholder="Email" id="email" type="email" />
                                    <h6 className="">Password</h6>
                                    <input {...register('password')} className='w-full mb-5 h-10 rounded' placeholder="password" id="password" type="password" />
                                </div>
                                <div className="m-5">
                                    <h6 className="">Confirm Password</h6>
                                    <input {...register('Confirmpassword')} className='w-full mb-5 h-10 rounded' placeholder="Confirm password" id="Confirmpassword" type="password" />
                                    <h6>Role</h6>
                                    <input {...register('role')} className='w-full mb-5 h-10 rounded' placeholder="admin/user" id="role" type="text" />
                                    <h6>Status</h6>
                                    <input {...register('status')} className='w-full mb-5 h-10 rounded' placeholder="active/inactive" id="status" type="text" />
                                </div>
                                <div className=""> 
                                    <button className='bg-blue-500 w-24 text-white py-2 px-2 rounded hover:bg-sky-700'>Login</button>
                                </div>
                                <Link to='/register' className="flex justify-center text-blue-700 m-1  ">Create Account?</Link>
                            </div>
                            <div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}
export default Register;