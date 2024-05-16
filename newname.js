const joinname = (firstName, lastName) => {
  return `my name is ${firstname} ${lastname}`;
};
const sayhello = () => {
  console.log("hello");
};
export default joinname; // only used if we want to export only 1 file
export { sayhello };
