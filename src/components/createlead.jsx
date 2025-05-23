import { useForm } from "react-hook-form";
import Register from "../pages/register";
import { Form } from "react-router-dom";
import axios from "axios";
import "../styles/createLead.css"
import { useChartContainerDimensions } from "@mui/x-charts/internals";
function createlead(props) {
    const { setIsModelOpen, modelClose , } = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const newLead = async (data) => {
        try {
            const request = { ...data };
            await axios.post('http://localhost:5000/Leads', request);
            console.log("successfull....");
            setIsModelOpen(false);
        } catch (error) {
            console.log("error Occurs...");
        }
    }

    return (
        <div id="modal" className="modal fixed  inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-9/12 ">
                <h2 className="text-2xl  text-left shadow-lg"><i class="fa-solid fa-id-card rounded-none bg-white"></i>Create Lead</h2>
                <div className="p-5">
                    <form onSubmit={handleSubmit(newLead)}>
                        <div className="createLeads flex">
                            <div className="m-2">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                    <input {...register('name')} type="text" id="name" className="w-full px-4 py-2 border-b" placeholder="John Doe" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input {...register('email')} type="email" id="email" className="w-full px-4 py-2 border-b rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@/example.com" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700">Password</label>
                                    <input {...register('password')} type="password" id="password" className="w-full px-4 py-2 border-b rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password</label>
                                    <input {...register('confirm_password')} type="password" id="confirm_password" className="w-full px-4 py-2 border-b rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="batch" className="block text-gray-700">Course</label>
                                    <input {...register('batch')} type="text" id="batch" className="w-full px-4 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Morning/Evening" required />
                                </div>
                            </div>
                            <div className="m-2">
                                <div className="mb-4">
                                    <label htmlFor="role" className="block text-gray-700">role</label>
                                    <input {...register('role')} type="text" id="role" className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-bl`ue-400" placeholder="admin/user" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="status" className="block text-gray-700">status</label>
                                    <input {...register('status')} type="text" id="status" className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="active/inactive" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                    <input {...register('phone')} type="text" id="phone" className="w-full px-4 py-2 border-b  focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="active/inactive" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Course" className="block text-gray-700">Course</label>
                                    <input {...register('Course')} type="text" id="course" className="w-full px-4 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="" required />
                                </div>
                                <label htmlFor="">Mode</label>
                                <select className="mb-4 w-full border-b h-10" {...register('classMode')}>

                                    {/* <input {...register('mode')} type="text" id="mode" className="w-full px-4 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Online/Offline" required /> */}
                                    <option value="Online" >Online</option>
                                    <option value="Offline" >Offline</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">

                            <button type="submit" className="w-max bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => register()}>Create Lead</button>
                            <button className="w-max  ml-3 py-2 px-3 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={() => setIsModelOpen(false)} >Close</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default createlead;