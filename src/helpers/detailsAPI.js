const getData = async () => {
  const data = await fetch('https://spayco-gtime.herokuapp.com/games', {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

const pushData = async game => {
  const data = await fetch('https://spayco-gtime.herokuapp.com/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: game[0],
      memory: game[1],
      intelligence: game[2],
      social: game[3],
      link: game[4],
    }),
  }).then(response => response.json());
  return data;
};

export default { getData, pushData };
