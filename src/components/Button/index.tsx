import { Container } from "./styles";

interface ButtonProps {
  title: string;
  loading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ title, loading = false, onClick }: ButtonProps) {
  return (
    <Container type="button" onClick={onClick} disabled={loading}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
