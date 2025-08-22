import { Outlet } from "react-router";
import Container from "./components/5-pages/Container";
const WrapPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default WrapPage;
