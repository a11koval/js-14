const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));


const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));


const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));



const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

console.log(getUserWithEmail(users, 'elmahead@omatom.com'));



