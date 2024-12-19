interface JobPost {
  id: number;
  category_name: string;
  location_name: string;
  type_display: string;
  is_draft: boolean;
  title: string;
  description: string;
  company_name: string;
  salary: string;
  type: string;
  publication_date: string;
  slug: string;
  location: number;
  category: number;
}

export type { JobPost };
