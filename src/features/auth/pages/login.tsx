import { LoginForm } from "../components/loginForm";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-7">
        <h1 className="text-3xl font-semibold md:text-center">
          Iniciar Sesión
        </h1>
      </div>
      <LoginForm />
    </div>
  );
}
