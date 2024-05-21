import { Login } from "../auth/pages/login";
import { SignUp } from "../auth/pages/signUp";
import { JobOffert } from "../offert/jobOffert";

export function LandingPage() {
  return (
    <div className="mx-auto w-full max-w-screen-xl space-y-8 pb-12 sm:px-6 sm:pt-12">
      <SignUp />
      <Login />
      <JobOffert />
    </div>
  );
}
