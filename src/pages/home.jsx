import '../styles/home.css';
import { LineChart } from '@mui/x-charts/LineChart';
function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
 
    return (
        <div className='homeBody'>
            <div className="p-10">
                <h3 className="font-bold">Hey {user.name} <span className="font-normal">- here’s what’s happening with your store today</span></h3>
            </div>
            <div className="leadCards px-10 grid grid-cols-5 ">
                <div className="cards shadow-md ">
                    <div className='flex'>
                        <div>
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className='ml-5 mt-2'>
                            <h3>Today’s Leads</h3>
                            <h6>350</h6>
                        </div>
                    </div>
                </div>
                <div className='cards shadow-md'>

                    <div className='flex'>
                        <div>
                            <i className="fa-brands fa-bitbucket"></i>
                        </div>
                        <div className='ml-5 mt-2'>
                            <h3>Opportunity Leads</h3>
                            <h6>640</h6>
                        </div>
                    </div>
                </div>
                <div className='cards shadow-md'>

                    <div className='flex'>
                        <div>
                            <i className="profile fa-solid fa-user"></i>
                            <i className="plus fa-solid fa-plus"></i>
                        </div>
                        <div className='ml-5 mt-2'>
                            <h3>Warm Leads</h3>
                            <h6>350</h6>
                        </div>
                    </div>
                </div>
                <div className='cards shadow-md'>


                    <div className='flex'>
                        <div>
                            <i className="profile fa-solid fa-user"></i>
                            <i className="minus fa-solid fa-minus"></i>
                        </div>
                        <div className='ml-5 mt-2'>
                            <h3>Attempted Leads</h3>
                            <h6>100</h6>
                        </div>
                    </div>
                </div>
                <div className='cards shadow-md'>

                    <div className='flex'>
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <div className='ml-5 mt-2'>
                            <h3>Today’s Leads</h3>
                            <h6>930</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-6/12 ml-14 my-10 p-10 bg-white rounded drop-shadow-xl'>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 8],
                        },
                    ]}
                    height={300}
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                />


            </div>
        </div>
    )
}




export default Home;


