const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let secretName = '';
let chars = [];
for(let i = 0; i < members.length; i++)
{
  let word = members[i].toUpperCase();
  if(word[0] !== '0' && word[0] !== '1' && word[0] !== '2' && word[0] !== '3' && word[0] !== '4' && word[0] !== '5' && word[0] !== '6' && word[0] !== '7' && word[0] !== '8' && word[0] !== '9')
  {
    chars.push(word[0]);
  }
}
chars.sort();
for(let i = 0; i < chars.length; i++)
{
  secretName += chars[i];
}
return secretName;
};
