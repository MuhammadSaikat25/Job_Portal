import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: ReactNode;
};

const EmployerRoute = ({ children }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  if (!user || user.role !== "employer") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default EmployerRoute;
