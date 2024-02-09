import { useGetLoggedUser } from 'services/hooks/useGetLoggedUser'
import AdminLayout from '../../components/admin/AdminLayout'

const Home = () => {
  const loggedUser = useGetLoggedUser()
  return (
    <AdminLayout>
      <p className="text-2xl font-semibold border-b pb-5">
        🪻 Olá, {loggedUser?.name.split(' ')[0]}
      </p>
    </AdminLayout>
  )
}

export default Home
