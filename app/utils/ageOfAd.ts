function getAgeOfAd(publicationDate: string): string {
  const publication: Date = new Date(publicationDate);
  const now: Date = new Date();
  const diffInMs: number = now.getTime() - publication.getTime();
  const diffInHours: number = diffInMs / (1000 * 60 * 60);
  const diffInDays: number = Math.floor(diffInHours / 24);
  const diffInWeeks: number = Math.floor(diffInDays / 7);

  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} годин тому`;
  } else if (diffInDays < 7) {
    return `${diffInDays} днів тому`;
  } else {
    return `${diffInWeeks} тижнів тому`;
  }
}

export default getAgeOfAd;
