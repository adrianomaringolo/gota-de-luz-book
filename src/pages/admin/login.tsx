import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import AdminLayout from "../../components/admin/AdminLayout";
import md5 from "md5";
import { useRouter } from "next/dist/client/router";

const LoginStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login = () => {
  const [login, setLogin] = useState<any>();
  const [error, setError] = useState(false);
  const router = useRouter();

  const changeLogin = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setLogin({ ...login, [field]: e.target.value });
  };

  const onLogin = () => {
    if (md5(login.pass) === "e038cd889385680696f691a2a1b599db") {
      setError(false);
      localStorage.setItem(
        "adminLogged",
        JSON.stringify({ ...login, loginAt: new Date().toISOString() })
      );
      router.push("/admin/pedidos");
    } else {
      setError(true);
    }
  };

  return (
    <AdminLayout>
      <LoginStyled>
        <h1 className="is-size-1 has-text-weight-bold">
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </h1>
        <p className="is-size-4 mb-3">Painel Administrativo</p>
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            className="input is-medium"
            type="text"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              changeLogin(e, "name")
            }
          />
        </div>
        <div className="field">
          <label htmlFor="pass">Senha</label>
          <input
            className="input is-medium"
            type="text"
            placeholder="Password"
            name="pass"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              changeLogin(e, "pass")
            }
          />
        </div>
        <div className="is-flex">
          {error && <p className="has-text-danger">Credenciais erradas</p>}
          <button className="button is-primary ml-auto" onClick={onLogin}>
            Entrar
          </button>
        </div>
      </LoginStyled>
    </AdminLayout>
  );
};

export default Login;
