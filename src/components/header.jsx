
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Header(props) {
    const { handleLogout } = props;

    const Logout = () => {
        localStorage.removeItem('user');
        toast.success('logout Successfully');
        handleLogout();
    }
    return (
        <div className="">
            <nav className="bg-white-800 p-4  shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-2xl font-bold">
                        <img className="ml-5" src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="" width={150} />
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/home" className="text-black cursor-pointer hover:drop-shadow-xl hover:text-black hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Home</Link >
                        <Link to='/leads' className="text-black cursor-pointer  hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Leads</Link >
                        <Link to="#" className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Opportunities</Link >
                        <Link to="#" className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Learners</Link >
                        <Link to="#" className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Courses</Link >
                        <Link to="#" className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Activities</Link >
                        <Link to="#" className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-sky-200 px-3 py-2 hover:rounded-t-lg">Analytics</Link >
                        <Link onClick={Logout} to='/' className="text-black cursor-pointer hover:text-black hover:drop-shadow-xl hover:bg-red-400 px-3 py-2 hover:rounded-t-lg ">Logout</Link >
                    </div>
                    <div className="md:hidden">
                        <button id="nav-toggle" className="text-white focus:outline-none">
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;