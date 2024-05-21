import { CreateOffert } from "./components/createOffert.tsx";

export function JobOffert() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-7">
        <h1 className="text-3xl font-semibold md:text-center">General</h1>
      </div>
      <CreateOffert />
    </div>
  );
}
