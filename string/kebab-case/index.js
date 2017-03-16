export default input => input.split(' ')
  .map(word => word.toLowerCase())
  .join('-');
