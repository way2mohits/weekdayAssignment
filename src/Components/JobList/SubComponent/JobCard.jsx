import React from "react"
import "../JobListStyle.css"
export const JobCard = ({jobObj})=>{
    return(<div className="jobCardContainer">
        <div className="jobPostDays">
            &#8987;Posted 10 days ago
        </div>
        <div className="companyDetailsContainer">
            <div className="companyLogoDiv"><img src={jobObj.logoUrl} style={{height:"100%"}} /></div>
            <div className="companyDetails">
                <div className="companyName">{jobObj.companyName}</div>
                <div className="jobRole">{jobObj.jobRole}</div>
                <div className="jobLocation">{jobObj.location}</div>
            </div>
        </div>
        <p className="salaryDetails">
            Estimated salary range : {jobObj.minJdSalary ?? 0}LPA - {jobObj.maxJdSalary ?? 0}LPA &#x2705;
        </p>
        <div className="aboutCompany">
            <p className="aboutCompanyText">About Company:</p>
            <p style={{"padding": "0","marginTop": "0","fontWeight": "700"}}>About us</p>
            <p className="jobDescription">{jobObj.jobDetailsFromCompany}</p>
            <div className="translucentDiv"></div>
            <div className="viewJobLink"><a href={jobObj.jdLink}>View Job</a></div>
        </div>
        <div className="minimumExperienceText">Minimum Experience</div>
        <div>{jobObj.minExp} years</div>
        <div className="easyApplyButton">&#x26A1;Easy Apply</div>
        <div className="referalButton">Unlock Referal asks</div>
    </div>);
}