import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

function MovieStackApp() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default MovieStackApp;
