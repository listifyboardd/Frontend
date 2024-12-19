interface Category {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
}

interface Region {
  id: number;
  name: string;
}

interface PostsFilterProps {
  categoriesApiUrl: string;
}

export type { Category, Country, Region, PostsFilterProps };
