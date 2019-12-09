export const getCurrentTime = (createdAt=false) => {
    let today = new Date(createdAt);
    let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let dateTime = `${date} , ${time}`;

    return dateTime;
};

export const sortByDate = array => {
    return array.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt)})
};
