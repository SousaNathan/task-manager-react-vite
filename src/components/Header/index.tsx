import { FiUser } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Avatar, Container, Logout, Profile } from "./styles";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <Avatar>
          <FiUser />
        </Avatar>
        <div>
          <span>Bem vindo,</span>
          <strong>Nathan Sousa</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
