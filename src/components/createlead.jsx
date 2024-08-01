function createlead(){
    return(
        <div id="modal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center hidden">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Full Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@/example.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm_password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Register</button>
                    </form>
                    <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400" >Close</button>
                </div>
            </div>
    )
}
export default createlead;