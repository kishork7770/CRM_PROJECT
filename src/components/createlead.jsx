import { useForm } from "react-hook-form";
import Register from "../pages/register";
import { Form } from "react-router-dom";
import axios from "axios";
import { useChartContainerDimensions } from "@mui/x-charts/internals";
function createlead(props) {
    const { setIsModelOpen, modelClose } = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const newLead = async (data) => {
        try {
            const request = { ...data };
            await axios.post('http://localhost:4000/Leads', request);
            console.log("successfull....");
            setIsModelOpen(false);
        } catch (error) {
            console.log("error Occurs...");
        }
    }

    return (
        <div id="modal" className="modal fixed  inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-5">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit(newLead)}>
                    <div className="flex ">
                        <div className="m-2">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input {...register('name')} type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input {...register('email')} type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@/example.com" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <input {...register('password')} type="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password</label>
                                <input {...register('confirm_password')} type="password" id="confirm_password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" required/>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-700">role</label>
                                <input {...register('role')} type="text" id="role" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="admin/user" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="status" className="block text-gray-700">status</label>
                                <input {...register('status')} type="text" id="status" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="active/inactive" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                <input {...register('phone')} type="text" id="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="active/inactive" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Course" className="block text-gray-700">Course</label>
                                <input {...register('Course')} type="text" id="course" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="" required/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => register()}>Create Lead</button>
                </form>
                <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={() => setIsModelOpen(false)} >Close</button>
            </div>
        </div>
    )
}
export default createlead;