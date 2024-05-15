import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="space-y-6 p-10 pb-16">
      <form className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search by ID" autoFocus />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default Search;
