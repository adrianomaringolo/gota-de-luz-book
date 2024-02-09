import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, useState } from 'react'
import { UsersService } from 'services/UsersService'
import styled from 'styled-components'
import AdminLayout from '../../components/admin/AdminLayout'

const LoginStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Login = () => {
  const [login, setLogin] = useState<any>()
  const [error, setError] = useState(false)
  const router = useRouter()

  const changeLogin = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setLogin({ ...login, [field]: e.target.value })
  }

  const onLogin = async () => {
    try {
      const userAuth = await UsersService.getUserAuth(login.name, login.pass)
      setError(false)
      localStorage.setItem(UsersService.LOGGED_USER_KEY, JSON.stringify(userAuth))
      router.push('/admin')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <AdminLayout>
      <LoginStyled>
        <h1 className="is-size-1 has-text-weight-bold">
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </h1>
        <p className="is-size-4 mb-3">Painel Administrativo</p>
        <div className="field">
          <label htmlFor="name">Login</label>
          <input
            className="input is-medium"
            type="text"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => changeLogin(e, 'name')}
          />
        </div>
        <div className="field">
          <label htmlFor="pass">Senha</label>
          <input
            className="input is-medium"
            type="text"
            placeholder="Password"
            name="pass"
            onChange={(e: ChangeEvent<HTMLInputElement>) => changeLogin(e, 'pass')}
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
  )
}

export default Login
