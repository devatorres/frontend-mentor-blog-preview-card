import "./Title.css";

export const Title = ({ link = undefined, children }) => {
  const render = () => <h1 className="text-title">{children}</h1>;

  return link ? (
    <a className="text-link" href={link} rel="noreferrer" target="_blank">
      {render()}
    </a>
  ) : (
    render()
  );
};
