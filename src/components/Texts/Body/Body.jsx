import "./Body.css";

export const Body = ({ mt = undefined, mb = undefined, children }) => {
  return (
    <p
      className="text-body"
      style={{
        ...(mt ? { marginTop: `${mt}rem` } : {}),
        ...(mb ? { marginBottom: `${mb}rem` } : {}),
      }}
    >
      {children}
    </p>
  );
};
