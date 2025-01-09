
import { MainApp } from "./layout/MainApp";
import { UserProvider } from "./components/context/UserProvider";

export const TiendaApp = () => {

  return (
    <>
    <UserProvider> {/* Componentes que tendran acceso a UserContext */}
      
        <MainApp />
      
    </UserProvider>
    </>
  )
}
 