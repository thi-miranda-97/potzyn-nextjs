import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <Button variant="ghost" className="flex-center p-2 hover-scale">
      <SearchRoundedIcon />
    </Button>
  );
}
