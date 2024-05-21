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

export function SelectLevel() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona un nivel" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecciona</SelectLabel>
          <SelectItem value="junior">Junior</SelectItem>
          <SelectItem value="senior">Senior</SelectItem>
          <SelectItem value="semiSenior">Semi Senior</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
