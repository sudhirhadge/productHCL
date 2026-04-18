import { useMemo } from 'react';

const useCheckAge = (selectedDate) => {
  const ageData = useMemo(() => {
    if (!selectedDate) return { isAdult: false, age: null };

    const birthDate = new Date(selectedDate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
   
    return {
      isAdult: age >= 18,
      age: age
    };
  }, [selectedDate]);

  return ageData;
};

export default useCheckAge;