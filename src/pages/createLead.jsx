import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function CreateLead() {
    const {register, handleSubmit, watch , formState:{errors}} =useForm();
    

    const registerUser = async() =>{

    }
    return (

        <div>
             <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
    <form>
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Full Name</label>
        <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe"/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@example.com"/>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700">Password</label>
        <input type="password" id="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********"/>
      </div>
      <div class="mb-6">
        <label for="confirm_password" class="block text-gray-700">Confirm Password</label>
        <input type="password" id="confirm_password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********"/>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Register</button>
    </form>
  </div>
        </div>
    )
}

export default CreateLead;