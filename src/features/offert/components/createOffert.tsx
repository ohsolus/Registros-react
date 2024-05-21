import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { TextField } from "./../../../components/text-field";
import { SelectLevel } from "./selectLevel";
import { SelectType } from "./selectType";

export function CreateOffert() {
  function insertar() {}

  return (
    <form method="post">
      <div className="space-y-4 w-[400px]">
        <TextField
          id="job"
          labelProps={{
            children: "Trabajo ofertado",
          }}
          inputProps={{
            autoComplete: "text",
            placeholder: "ej: Desarrollador front Angular",
            type: "text",
            required: true,
            minLength: 3,
            maxLength: 30,
          }}
        />

        <TextField
          id="salary"
          labelProps={{
            children: "Salario",
          }}
          inputProps={{
            step: 0.01,
            min: 0.01,
            placeholder: "ej: 2000",
            type: "number",
            required: true,
            //...register("email"),
          }}
          //errorMessage={errors.email?.message}
        />

        <TextField
          id="experience"
          labelProps={{
            children: "Años de experiencia",
          }}
          inputProps={{
            min: 0,
            placeholder: "ej: 3",
            type: "number",
            //...register("email"),
          }}
          //errorMessage={errors.email?.message}
        />

        <SelectLevel />
        <SelectType />

        <Button>Submit</Button>
      </div>
    </form>
  );
}
