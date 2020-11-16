const getData = async () => {
  const data = await fetch('https://spayco-gtime.herokuapp.com/games', {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

const pushData = async () => {
  const data = await fetch('https://spayco-gtime.herokuapp.com/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Fortnite',
      memory: 5,
      intelligence: 5,
      social: -2,
      link: 'https://i.imgur.com/Jf1m3eb.jpg',
    }),
  }).then(response => response.json());
  return data;
};

export default { getData, pushData };
