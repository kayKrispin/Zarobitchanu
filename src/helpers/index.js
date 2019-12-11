export const getCurrentTime = (createdAt = false) => {
  const today = new Date(createdAt);
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} , ${time}`;

  return dateTime;
};

export const sortByDate = array => {
  return array.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
};
