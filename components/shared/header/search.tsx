import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <form
      action="/store"
      method="GET"
      className="w-[330px] flex-center gap-2 mb-5 lg:mb-10"
    >
      <Input
        name="q"
        type="text"
        placeholder="Search..."
        className="placeholder:body-2"
      />
      <Button
        variant="outline"
        type="submit"
        size="sm"
        className="body-2 placeholder:text-accent-foreground"
      >
        <SearchRoundedIcon />
      </Button>
    </form>
  );
}
