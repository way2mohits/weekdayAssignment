import React, { useEffect, useState } from "react";
import { JobCard } from "./SubComponent/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { addJobData } from "../../Redux/slice/jobListSlice";
import { fetchJobData, getFilteredJobData } from "./JobListUtils";

export const JobList = () => {
  const [offSet, setOffSet] = useState();
  const jobListData = useSelector((state) => state.jobList);
  const filters = useSelector(state=>state.filters);
  const filteredJobList = getFilteredJobData(jobListData,filters);
  console.log(filteredJobList);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetchJobData(offSet).then((result)=>{
        dispatch(addJobData(result.jdList));
        setOffSet((prevState)=>prevState+10);
    });
  },[])
  const handleScroll = async () => {
    const {scrollHeight, clientHeight } = document.documentElement;
    if (
      clientHeight + document.documentElement.scrollTop + 1 >=
      scrollHeight
    ) {
      fetchJobData(offSet).then((result)=>{
        dispatch(addJobData(result.jdList));
        setOffSet((prevState)=>prevState+10);
    });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("wheel", handleScroll);
    };
  });
  return <div style={{display:"flex",flexWrap:"wrap"}}>
  {filteredJobList.map((jobObj,index)=><JobCard key={jobObj.jdUid+index} jobObj={jobObj} />)}
  </div>
};
