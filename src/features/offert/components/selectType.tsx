import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export function SelectType() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Jornada laboral" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecciona</SelectLabel>
          <SelectItem value="full">Full-Time</SelectItem>
          <SelectItem value="part">Part-Time</SelectItem>
          <SelectItem value="turn">Por Turnos</SelectItem>
          <SelectItem value="diurn">Diurna</SelectItem>
          <SelectItem value="nocturn">Nocturna</SelectItem>
          <SelectItem value="flexible">Flexible</SelectItem>
          <SelectItem value="intensive">Intensiva</SelectItem>
          <SelectItem value="continue">Continua</SelectItem>
          <SelectItem value="discontinue">Discontinua</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
