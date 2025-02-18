"use client";

import { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  const [showForm, setShowForm] = useState(false);

  const handleSearchClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <>
      {/* Form (conditionally rendered) */}
      {showForm && (
        <form action="/store" method="GET" className="flex-center gap-2">
          <Input name="q" type="text" placeholder="Search..." className="" />
          <Button type="submit">
            <SearchRoundedIcon />
          </Button>
        </form>
      )}
      {/* Search Icon Button */}
      {!showForm && (
        <div
          onClick={handleSearchClick}
          className="cursor-pointer flex-center p-2 hover-scale"
        >
          <SearchRoundedIcon />
        </div>
      )}
    </>
  );
}
