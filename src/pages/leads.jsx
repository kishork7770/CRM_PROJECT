import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import React from 'react';
import '../styles/leads.css';
import { Link } from "react-router-dom";
import Createlead from "../components/createlead";
import Modal from 'react-modal';
import { set } from "react-hook-form";
function Leads() {
    const [leads, setLeads] = useState([]);
    const token = localStorage.getItem('Token');
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [role, setRole] = useState([]);
    useEffect(() => {

        if (localStorage.getItem('user')) {
            fetchLeads();
        }

    }, [])

    const fetchLeads = async () => {
        try {
            const leadData = await axios.get('http://localhost:4000/Leads');
            setLeads(leadData.data);
            const { role } = JSON.parse(localStorage.getItem('user'));
            setRole(role);
            console.log(role);

        } catch (error) {
            console.log("connection error...");
        }
    }

    const openModel = () => {
        setIsModelOpen(true);
        console.log("modal is open")
    }
    const modelClose = () => {
        setIsModelOpen(false);
    }

    const createLead = () => {

    }
    return (
        <div>
            <div className="window m-10 p-5 rounded-md">
                <div>
                    <div className="flex">
                        <h2 className="w-full pb-10 text-2xl text-blue-500">Today's Leads</h2>
                        {role === "admin" && <button className="justify-center text-center w-32 px-2 py-2 bg-blue-500 h-10 rounded" onClick={() => openModel()}>Create Lead </button>
                        }<select name="Action" id="" className="justify-center w-28 mx-2 px-2 h-10 rounded">
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
                                        <td className="px-4 py-2 ">{lead.Course}</td>
                                    </tr>
                                ))}
                            </Fragment>
                        </tbody>
                    </table>
                </div>
            </div>
            {isModelOpen && (
                <Createlead setIsModelOpen={setIsModelOpen} openModel={openModel} modelClose={modelClose} />
            )}
        </div>



    )
}

export default Leads;