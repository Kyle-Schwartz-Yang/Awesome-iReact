


export const onSearchEmployees = (arr, str) => {

  if(str.length === 0) {
    return arr;
  }

  const searchTerm = str.trim().toLowerCase();

  return arr.filter(item => item.name.toLowerCase().includes(searchTerm));

};


