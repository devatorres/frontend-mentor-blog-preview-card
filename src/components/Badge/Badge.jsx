import "./Badge.css";

export const Badge = ({ color, children }) => {
  return (
    <span role="note" className={`badge ${color}`}>
      {children}
    </span>
  );
};
