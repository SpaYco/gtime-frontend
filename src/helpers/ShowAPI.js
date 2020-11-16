const getData = async id => {
  const data = await fetch(`https://spayco-gtime.herokuapp.com/games${id}`, {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

export default getData;
