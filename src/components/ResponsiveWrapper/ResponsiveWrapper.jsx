import "./ResponsiveWrapper.css";

export const ResponsiveWrapper = ({ children }) => {
  // Este componente se usa para crear un espaciado en medidas inferiores
  return (
    <div role="wrapper" className="responsive-wrapper">
      {children}
    </div>
  );
};
