// nonsense solution
const isAnagram = function (s, t) {
  return s.split(``).sort().join(``) === t.split(``).sort().join(``);
};

export default isAnagram;
