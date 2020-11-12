export const signin = async (sessionType, name) => {
  if (sessionType === 'login') {
    const data = await fetch(`https://spayco-gtime.herokuapp.com/signin?uname=${name}`, {
      method: 'GET',
    }).then(response => response.json());
    if (await data.reply === 'exists') {
      return [true, data.user[0]];
    }
    return false;
  }
  const data = await fetch('https://spayco-gtime.herokuapp.com/users', {
    method: 'POST',
    body: {
      username: name,
    },
  }).then(response => response.json());
  if (await data.status === 200) {
    return [true, data.user[0]];
  }
  return false;
};

export const getData = async id => {
  await id;
  return id;
};
