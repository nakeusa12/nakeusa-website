const Title = ({ title, name, fzName, fzTitle }) => {
  return (
    <>
      <h2 className="font-bold text-white" style={{ fontSize: `${fzTitle}` }}>{title}</h2>
      <h1 className="uppercase font-bold" style={{ fontSize: `${fzName}` }}>{name}</h1>
    </>
  );
};
export default Title;