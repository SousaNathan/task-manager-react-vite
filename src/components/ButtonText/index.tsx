import { Container } from "./styles";

interface ButtonTextProps {
  title: string;
  isActive: boolean;
}

export function ButtonText({ title, isActive = false }: ButtonTextProps) {
  return (
    <Container type="button" $isactive={isActive.toString()}>
      {title}
    </Container>
  );
}
