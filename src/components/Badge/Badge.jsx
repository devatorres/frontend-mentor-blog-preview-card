import "./Badge.css";

export const Badge = ({ color, children }) => {
  return (
    <span role="badge" className={`badge ${color}`}>
      {children}
    </span>
  );
};
