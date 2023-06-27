import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { UserContext } from '../context/userContext'

interface AuthenticationGuardProps {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationGuardProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 4000)
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard