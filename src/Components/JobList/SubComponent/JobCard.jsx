import React from "react"
import "../JobListStyle.css"
// import { HourglassEmpty } from "@mui/icons-material";
export const JobCard = ({jobObj})=>{
//     jdUid(pin):"cfff35ac-053c-11ef-83d3-06301d0a7178-92010"
// jdLink(pin):"https://weekday.works"
// jobDetailsFromCompany(pin):"This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."
// maxJdSalary(pin):61
// minJdSalary(pin):null
// salaryCurrencyCode(pin):"USD"
// location(pin):"delhi ncr"
// minExp(pin):3
// maxExp(pin):6
// jobRole(pin):"frontend"
// companyName(pin):"Dropbox"
// logoUrl(pin):"https://logo.clearbit.com/dropbox.com"
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
            <div className="viewJobLink"><a href={jobObj.jdLink}>View Job</a></div>
        </div>
        <div className="minimumExperienceText">Minimum Experience</div>
        <div>{jobObj.minExp} years</div>
        <div className="easyApplyButton">&#x26A1;Easy Apply</div>
        <div className="referalButton">Unlock Referal asks</div>
    </div>);
}