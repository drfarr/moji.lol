import { Input } from "@/components/ui/input";

export function Search({ ...props }) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="h-9 md:w-[100px] lg:w-[300px]"
        {...props}
      />
    </div>
  );
}
