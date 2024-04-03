const getSchoolYear = (entranceYear: number) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  let schoolYear = 0;
  if (currentMonth >= 4) {
    schoolYear = currentYear - entranceYear + 1;
  } else {
    schoolYear = currentYear - entranceYear;
  }
  return schoolYear;
}

export default getSchoolYear;