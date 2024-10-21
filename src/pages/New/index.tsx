import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Link } from "react-router-dom";

import { CheckboxWrapper, Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar tarefa</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" type="text" />
          <Textarea placeholder="Descrição" type="textarea" />
          <Input placeholder="Categoria" type="text" />
          <CheckboxWrapper>
            <input type="checkbox" />
            <span>Concluida</span>
          </CheckboxWrapper>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
