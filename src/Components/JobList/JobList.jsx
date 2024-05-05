import React, { useEffect, useState } from "react";
import { JobCard } from "./SubComponent/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { addJobData } from "../../Redux/slice/jobListSlice";
import { fetchJobData } from "./JobListUtils";

export const JobList = () => {
  const [offSet, setOffSet] = useState();
  const jobListData = useSelector((state) => state.jobList);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetchJobData(offSet).then((result)=>{
        dispatch(addJobData(result.jdList));
        setOffSet((prevState)=>prevState+10);
    });
  },[])
  return <div style={{display:"flex",flexWrap:"wrap"}}>
  {jobListData.map((jobObj,index)=><JobCard key={jobObj.jdUid+index} jobObj={jobObj} />)}
  </div>
};
