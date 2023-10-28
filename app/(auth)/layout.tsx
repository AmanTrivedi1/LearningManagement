import "./layout.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
