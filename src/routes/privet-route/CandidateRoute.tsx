import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: ReactNode;
};

const CandidateRoute = ({ children }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  console.log(user);
  if (!user || user.role !== "candidate") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default CandidateRoute;
