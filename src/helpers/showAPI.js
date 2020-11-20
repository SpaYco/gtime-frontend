const getData = async id => {
  const data = await fetch(`https://spayco-gtime.herokuapp.com/games/${id}`, {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

const pushData = async game => {
  const data = await fetch('https://spayco-gtime.herokuapp.com/measurements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: 1,
      game_id: game[0],
      hours: game[1],
    }),
  }).then(response => response.json());
  return data;
};

export default { getData, pushData };
