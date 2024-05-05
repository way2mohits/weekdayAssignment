import React from "react"
import "../JobListStyle.css"
export const JobCard = ()=>{
    return(<div className="jobCardContainer">
        <div className="jobPostDays">
            Job Posted 10 days ago
        </div>
        <div className="companyDetails">
            <span>img</span>
            <span>
                <p>Company Name</p>
                <p>job title</p>
                <p>Location</p>
            </span>
        </div>
        <div className="salaryDetails">
            Estimated salary range
        </div>
        <div className="aboutCompany">
            
        </div>
    </div>);
}