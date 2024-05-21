import { Button } from "../../../components/ui/button";
import { TextField } from "./../../../components/text-field";

export function LoginForm() {
  return (
    <form>
      <div className="space-y-4 w-[400px]">
        <TextField
          id="email"
          labelProps={{
            children: "Email",
          }}
          inputProps={{
            autoComplete: "email",
            placeholder: "example@gmail.com",
            type: "email",
            required: true,
          }}
        />

        <TextField
          id="password"
          labelProps={{
            children: "Contraseña",
          }}
          inputProps={{
            placeholder: "*******",
            type: "password",
            required: true,
          }}
        />

        <Button>Submit</Button>
      </div>
    </form>
  );
}
