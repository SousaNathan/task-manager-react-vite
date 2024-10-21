import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Avatar, Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Avatar>
        <FiUser />
      </Avatar>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha atual" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>
        <Button title="Salvar" loading={false} />
      </Form>
    </Container>
  );
}
