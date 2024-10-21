import { Tag } from "../Tag";
import { Container } from "./styles";

interface TaskProps {
  data: {
    title: string;
    category: string;
  };
  [key: string]: any;
}

export function Task({ data, ...rest }: TaskProps) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <footer>
        <Tag title={data.category} />
      </footer>
    </Container>
  );
}
