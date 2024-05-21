import { Button } from "../../../components/ui/button";
import { TextField } from "./../../../components/text-field";
import dayjs from "dayjs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./../../../components/ui/select";

export function SignUpForm() {
  return (
    <form>
      <div className="space-y-4 w-[400px]">
        <TextField
          id="email"
          labelProps={{
            children: "Email",
          }}
          inputProps={{
            placeholder: "ej: johndoe@gmail.com",
            autoComplete: "email",
            type: "email",
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
        <TextField
          id="userName"
          labelProps={{
            children: "Nombre de usuario",
          }}
          inputProps={{
            placeholder: "example123",
            type: "text",
          }}
        />
        <TextField
          id="bday"
          labelProps={{
            children: "Fecha de nacimiento",
          }}
          inputProps={{
            autoComplete: "bday",
            type: "date",
            max: dayjs().format("YYYY-MM-DD"),
          }}
        />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Ingreso como" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecciona</SelectLabel>
              <SelectItem value="reclutador">Reclutador</SelectItem>
              <SelectItem value="candidato">Candidato</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="w-full">Submit</Button>
      </div>
    </form>
  );
}
