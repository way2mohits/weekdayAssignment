export const fetchJobData = async (offSet) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: offSet,
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
  
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.text();
  
      return JSON.parse(result);
      
    } catch (error) {
      console.error(error);
    }
};
export const getFilteredJobData = (jobList,filters)=>{
  let filteredJobList = jobList;
  if(filters.roles.length>0){
    filteredJobList = filterFromRoles(filteredJobList,filters.roles);
  }
  if(filters.employees.length>0){
    filteredJobList = filterFromEmployees(filteredJobList,filters.employees);
  }
  if(filters.experience!=null){
    filteredJobList = filterFromExperience(filteredJobList,filters.experience);
  }
  if(filters.remote.length>0){
    filteredJobList = filterFromRemote(filteredJobList,filters.remote);
  }
  if(filters.minimumSalary!=null){
    filteredJobList = filterFromMinimumSalary(filteredJobList,filters.minimumSalary);
  }
  if(filters.companyName!=""){
    filteredJobList = filterFromCompanyName(filteredJobList,filters.companyName);
  }
  return filteredJobList;
}
const filterFromRoles = (jobList,roleFilters)=>{
  return jobList.filter((jobObj)=>
    roleFilters.includes(jobObj.jobRole))
}
const filterFromEmployees = (jobList,employeesFilter)=>{
  return jobList.filter((jobObj)=>{
    if(jobObj.numberOfEmployees==null){
      return jobObj
    }else if(employeesFilter.includes(jobObj)){
      return employeesFilter;
    }})
}
const filterFromExperience = (jobList,experienceFilter)=>{
  return jobList.filter((jobObj)=>{
    const jobMinExp = jobObj.minExp ?? 0;
    const jobMaxExp = jobObj.maxExp ?? 20;
    if(jobMinExp<=experienceFilter && experienceFilter<=jobMaxExp){
      return jobObj;
    }
  })
}
const filterFromRemote = (jobList,remoteFilter)=>{
  return jobList.filter((jobObj)=>{
    if(jobObj.location=='remote' && remoteFilter.includes('remote')){
      return jobObj;
    }else if(jobObj.location=='hybrid' && remoteFilter.includes('hybrid')){
      return jobObj;
    }else if(jobObj.location!='hybrid' && jobObj.location!='remote' && remoteFilter.includes('in office')){
      return jobObj;
    }
  })
}
const filterFromMinimumSalary = (jobList,minimumSalary)=>{
  return jobList.filter((jobObj)=>{
    const maxSlary = jobObj.maxJdSalary ?? 1000;
    return minimumSalary<=maxSlary;
  })
}
const filterFromCompanyName = (jobList,companyName)=>{
  return jobList.filter((jobObj)=>{
    if(jobObj.companyName!=null){
      return jobObj.companyName.toLowerCase().includes(companyName.toLowerCase());
    }else{
      return jobObj;
    }
  })
}