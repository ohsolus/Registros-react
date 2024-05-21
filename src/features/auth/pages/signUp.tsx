import { SignUpForm } from "../components/SignUpForm";

export function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-7">
        <h1 className="text-3xl font-semibold md:text-center">Registro</h1>
      </div>
      <SignUpForm />
    </div>
  );
}
