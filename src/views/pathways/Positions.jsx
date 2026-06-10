"use client";

import React, { useState, useEffect } from "react";
import { Bag, Clock, Location, LoudSpeaker, Ruppee } from "../../components/icons/CommonIcons.jsx";

const Positions = () => {
    const [jobs, setJobs] = useState([]);
    const [openJobId, setOpenJobId] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch jobs from Google Apps Script
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            // Replace with your Google Apps Script Web App URL
            const scriptUrl = "https://script.google.com/macros/s/AKfycbxVl5HzyiMKdHqB9OliEpX62opeTXX4bqHALb9gMRnNB9nB47azCflvXiGZPA_DXlvG/exec";
            const response = await fetch(scriptUrl);
            const data = await response.json();
            
            if (data.success) {
                setJobs(data.jobs);
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center mt-[100px] px-4">
                <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold leading-[100%] tracking-[0.07em] mb-10">
                    <span className="text-black">OPEN </span>
                    <span className="text-[#5B7C99]">POSITIONS</span>
                </h1>
                <div className="text-center">Loading jobs...</div>
            </div>
        );
    }

    if (jobs.length === 0) {
        return (
            <div className="w-full flex flex-col items-center mt-[100px] px-4">
                <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold leading-[100%] tracking-[0.07em] mb-10">
                    <span className="text-black">OPEN </span>
                    <span className="text-[#5B7C99]">POSITIONS</span>
                </h1>
                <div className="text-center">No open positions at the moment.</div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center mt-[100px] px-4">
            {/* Heading */}
            <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold leading-[100%] tracking-[0.07em] mb-10">
                <span className="text-black">OPEN </span>
                <span className="text-[#5B7C99]">POSITIONS</span>
            </h1>

            {/* Job Listings */}
            {jobs.map((job) => (
                <JobCard 
                    key={job.ID} 
                    job={job} 
                    isOpen={openJobId === job.ID}
                    onToggle={() => setOpenJobId(openJobId === job.ID ? null : job.ID)}
                />
            ))}
        </div>
    );
};

// Job Card Component
const JobCard = ({ job, isOpen, onToggle }) => {
    const formatSalary = () => {
        if (!job.SalaryMin && !job.SalaryMax) return "Negotiable";
        if (job.SalaryMin && job.SalaryMax) {
            return `${job.SalaryMin.toLocaleString()} - ${job.SalaryMax.toLocaleString()}`;
        }
        return job.SalaryMin ? `From ${job.SalaryMin.toLocaleString()}` : `Up to ${job.SalaryMax.toLocaleString()}`;
    };

    return (
        <div className="
            w-full max-w-[1100px] border-l-[#5B7C99] border-l-2 border border-[#E5E7EB]
            rounded-[18px] shadow-[0_0_11px_0_#00000040] p-6 sm:p-8 mb-8
        ">
            <div className="flex justify-between items-center">
                {/* LEFT */}
                <div className="flex items-center gap-[26px]">
                    <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#CED6DB]">
                        <LoudSpeaker />
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] font-bold tracking-[0.03em] text-[#5B7C99]">
                        {job.Title}
                    </h2>
                </div>

                {/* DROPDOWN ARROW */}
                <button onClick={onToggle}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                        <path stroke="black" strokeWidth="2" fill="none" d="M6 9l6 6 6-6" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 xl:ml-[66px]">
                <Tag icon={<Location />} text={job.Location} />
                {job.Experience && <Tag icon={<Bag />} text={job.Experience} />}
                <Tag icon={<Clock />} text={job.Type} />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
                <div className="flex items-start gap-1 xl:ml-[66px]">
                    <div className="mt-[2px]"><Ruppee /></div>
                    <p className="text-[17px] font-semibold tracking-[0.02em]">
                        {formatSalary()} <br />
                        <span className="text-[15px] text-gray-600 ml-1 italic">/ {job.Period || "Annum"}</span>
                    </p>
                </div>
                
                <button 
                    onClick={() => {
                        const applySection = document.getElementById("position");
                        if (applySection) {
                            applySection.scrollIntoView({ behavior: "smooth" });
                            // You can pass job data to application form
                            localStorage.setItem("applyingForJob", job.ID);
                        }
                    }}
                    className="
                        mt-4 sm:mt-0 bg-[#60809C] text-white px-[50px] py-2 rounded-[10px]
                        font-semibold text-[16px] leading-[25px] tracking-[0.04em] capitalize
                        cursor-pointer hover:bg-[#4a6a86] transition-colors
                    "
                >
                    Apply Now
                </button>
            </div>

            {/* Job Details (Collapsible) */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out xl:ml-[66px] ${
                    isOpen ? "max-h-[2000px] mt-8" : "max-h-0"
                }`}
            >
                {/* ABOUT THE ROLE */}
                {job.AboutRole && (
                    <>
                        <h3 className="font-bold text-[17px] tracking-wide mb-4">About the Role:</h3>
                        <p className="text-[16px] tracking-widest leading-[29px] mb-6 whitespace-pre-line">
                            {job.AboutRole}
                        </p>
                    </>
                )}

                {/* YOU'LL DO */}
                {job.Responsibilities && job.Responsibilities.length > 0 && (
                    <>
                        <h3 className="font-bold text-[17px] tracking-wide mb-4">You'll Do:</h3>
                        <ul className="list-disc ml-6 text-[16px] leading-[29px] tracking-wide mb-6">
                            {job.Responsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* REQUIREMENTS */}
                {job.Requirements && job.Requirements.length > 0 && (
                    <>
                        <h3 className="font-bold text-[17px] tracking-wide mb-4">Requirements:</h3>
                        <ul className="list-disc ml-6 text-[16px] leading-[29px] tracking-wide mb-6">
                            {job.Requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* NICE TO HAVE */}
                {job.NiceToHave && job.NiceToHave.length > 0 && (
                    <>
                        <h3 className="font-bold text-[17px] tracking-wide mb-4">Nice to Have:</h3>
                        <ul className="list-disc ml-6 text-[16px] leading-[29px] tracking-wide mb-6">
                            {job.NiceToHave.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

const Tag = ({ icon, text }) => {
    return (
        <div className="
            flex items-center gap-2 bg-[#E6EEF6] text-[##000000]
            px-4 py-2 rounded-[20px] text-[14px] tracking-[0.02em]
        ">
            <div className="w-[18px] h-[18px] flex items-center justify-center">
                {icon}
            </div>
            <span>{text}</span>
        </div>
    );
};

export default Positions;