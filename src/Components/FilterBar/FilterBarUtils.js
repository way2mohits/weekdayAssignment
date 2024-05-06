export const getRolesDropdownOption = () => {
  const engineeringOptions = [
    { value: "backend", label: "Backend" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "FullStack" },
    { value: "ios", label: "IOS" },
    { value: "flutter", label: "Flutter" },
    { value: "react native", label: "React Native" },
    { value: "android", label: "Android" },
    { value: "tech lead", label: "Tech Lead" },
    { value: "dev ops", label: "Dev-ops" },
    { value: "data engineer", label: "Data Engineer" },
    { value: "data science", label: "Data Science" },
    { value: "computer vision", label: "Computer-Vision" },
    { value: "nlp", label: "Nlp" },
    { value: "deep learning", label: "Deep-Learning" },
    { value: "test qa", label: "Test Qa" },
  ];
  const designOptions = [
    { value: "designer", label: "Designer" },
    { value: "design manager", label: "Design Manager" },
    { value: "graphic designer", label: "Graphic Designer" },
    { value: "product designer", label: "Product Designer" },
  ];
  const productOptions = [
    { value: "product manager", label: "Product Manager" },
  ];
  const roleOptions = [
    {
      label: "Engineering",
      options: engineeringOptions,
    },
    {
      label: "Design",
      options: designOptions,
    },
    {
      label: "Product",
      options: productOptions,
    },
  ];
  return roleOptions;
};
export const getNumberOfEmployeesOption = () => {
  return [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "500+", label: "500+" },
  ];
};
export const getExperienceOptions = () => {
  return [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
};
export const getRemoteOptions = () => {
  return [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in office", label: "In-office" },
  ];
};
export const getMinimumBasePayOptions = () => {
    return [
      { value: 0, label: "0L" },
      { value: 10, label: "10L" },
      { value: 20, label: "20L" },
      { value: 30, label: "30L" },
      { value: 40, label: "40L" },
      { value: 50, label: "50L" },
      { value: 60, label: "60L" },
      { value: 70, label: "70L" },
    ];
  };
