"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface CategoryProps {
  categories: string[];
  activeCategory: string;
}

const Category = ({
  categories,
  activeCategory: initialActiveCategory,
}: CategoryProps) => {
  const [activeCategory, setActiveCategory] = useState(initialActiveCategory);

  useEffect(() => {
    setActiveCategory(initialActiveCategory);
  }, [initialActiveCategory]);

  const handleCategoryClick = (category: string) => setActiveCategory(category);

  return (
    <div className="flex gap-2 lg:gap-4 my-3 lg:my-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => handleCategoryClick(category)}
          className=""
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
