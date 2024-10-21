import { Container } from "./styles";

interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return <Container>{title}</Container>;
}
