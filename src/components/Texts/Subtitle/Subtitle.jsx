import "./Subtitle.css";

export const Subtitle = ({ mt = undefined, mb = undefined, children }) => {
  return (
    <h3
      className="text-subtitle"
      style={{
        ...(mt ? { marginTop: `${mt}rem` } : {}),
        ...(mb ? { marginBottom: `${mb}rem` } : {}),
      }}
    >
      {children}
    </h3>
  );
};
