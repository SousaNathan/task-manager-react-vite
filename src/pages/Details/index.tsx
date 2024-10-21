import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import { CheckboxWrapper, Container, Form } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Editar tarefa</h1>
            <a href="/">voltar</a>
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
