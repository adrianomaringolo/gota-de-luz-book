import styled from "styled-components";
import AdminLayout from "../../components/admin/AdminLayout";

const LoginStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login = () => (
  <AdminLayout>
    <LoginStyled>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
    </LoginStyled>
  </AdminLayout>
);

export default Login;
