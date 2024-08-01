import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import React from 'react';
import '../styles/leads.css';
import { Link } from "react-router-dom";

function Leads() {
    const [leads, setLeads] = useState([]);
    const token = localStorage.getItem('Token');
    const [isModelOpen, setIsModelOpen] = useState(false);
    useEffect(() => {

        if (localStorage.getItem('user')) {
            fetchLeads();
        }

    }, [])

    const fetchLeads = async () => {
        try {
            const leadData = await axios.get('http://localhost:4000/Leads');
            setLeads(leadData.data);
            console.log(leads);
        } catch (error) {
            console.log("connection error...");
        }
    }

    const toggleModal = () => {
        setIsModelOpen(!isModelOpen);
    }
    return (
        <div>
            <div className="window m-10 p-5 rounded-md">
                <div>
                    <div className="flex">
                        <h2 className="w-full pb-10 text-2xl text-blue-500">Today's Leads</h2>
                        <button className="justify-center text-center w-32 px-2 py-2 bg-blue-500 h-10 rounded" >Create Lead </button>
                        <select name="Action" id="" className="justify-center w-28 mx-2 px-2 h-10 rounded">
                            <option value="">Action</option>
                        </select>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full">
                        <thead className="bg-zinc-200">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Class Mode</th>
                                <th>Course</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {/* {leads.map((lead, leadId) => (
                                <tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                </tr>
                            ))}; */}

                            <Fragment>
                                {leads.map(lead => (
                                    <tr className="border-b " key={lead.id}>
                                        <td className="px-4 py-2">{lead.name}</td>
                                        <td className="px-4 py-2">{lead.email}</td>
                                        <td className="px-4 py-2">+91 {lead.phone}</td>
                                        <td className="px-4 py-2">{lead.classMode}</td>
                                        <td className="px-4 py-2 ">{lead.course}</td>
                                    </tr>
                                ))}
                            </Fragment>
                        </tbody>
                    </table>
                </div>
            </div>
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

        </div>



    )
}

export default Leads;