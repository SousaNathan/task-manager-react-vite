import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface AuthContextType {
  name: string;
  email: string;
  token: string;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ name: string; token: string } | null>(
    null
  );

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await api.post("/login/sign-in", {
        email,
        password,
      });

      const { name, token } = response.data;

      localStorage.setItem("@taskmanager:name", name);
      localStorage.setItem("@taskmanager:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ name, token });

      console.log("Usuário logado:", response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.data.errorMessages) {
          alert(error.response.data.errorMessages.join(", "));
        } else {
          alert(error.response.data.message || "Erro desconhecido.");
        }
      } else {
        alert("Não foi possível realizar o login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@taskmanager:name");
    localStorage.removeItem("@taskmanager:token");

    setData({});
  }

  useEffect(() => {
    const name = localStorage.getItem("@taskmanager:name");
    const token = localStorage.getItem("@taskmanager:token");

    if (name && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        name,
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        name: data?.name || "",
        token: data?.token || "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
