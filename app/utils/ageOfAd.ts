function getAgeOfAd(publicationDate: string): string {
  const publication: Date = new Date(publicationDate);
  const now: Date = new Date();
  const diffInMs: number = now.getTime() - publication.getTime();
  const diffInHours: number = diffInMs / (1000 * 60 * 60);
  const diffInDays: number = Math.floor(diffInHours / 24);
  const diffInWeeks: number = Math.floor(diffInDays / 7);

  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    return `${diffInWeeks} weeks ago`;
  }
}

export default getAgeOfAd;
