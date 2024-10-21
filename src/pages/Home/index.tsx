import { FiPlus, FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import { Task } from "../../components/Task";
import { Brand, Container, Content, Menu, NewTask, Search } from "./style";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Task Manager</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" $isactive="true" />
        </li>
        <li>
          <ButtonText title="Categoria" />
        </li>
        <li>
          <ButtonText title="Concluídas" />
        </li>
        <li>
          <ButtonText title="Não concluídas" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas tarefas">
          <Task
            data={{
              title: "API .NET (CONCLUÍDO)",
              category: "Desenvolvimento",
            }}
          />
          <Task
            data={{
              title: "APP React (EM CONSTRUÇÃO)",
              category: "Desenvolvimento",
            }}
          />
        </Section>
      </Content>
      <NewTask to="/new">
        <FiPlus />
        Criar tarefa
      </NewTask>
    </Container>
  );
}
