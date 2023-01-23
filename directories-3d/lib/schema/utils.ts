export function projectFilter(
  hasSearchText: boolean,
  hasSelectedCategory: boolean,
  hasSelectedProjectTypes: boolean,
  matchesSearchText: boolean,
  matchesSelectedCategory: boolean,
  matchesSelectedProjectTypes: boolean,
) {
  if (hasSearchText && hasSelectedCategory && hasSelectedProjectTypes) {
    return matchesSearchText &&
      matchesSelectedProjectTypes &&
      matchesSelectedCategory
      ? true
      : false;
  } else if (hasSearchText && hasSelectedCategory && !hasSelectedProjectTypes) {
    return matchesSearchText && matchesSelectedCategory;
  } else if (hasSearchText && hasSelectedProjectTypes && !hasSelectedCategory) {
    return matchesSearchText && matchesSelectedProjectTypes;
  } else if (hasSelectedCategory && hasSelectedProjectTypes && !hasSearchText) {
    return matchesSelectedProjectTypes && matchesSelectedCategory;
  } else if (hasSearchText) {
    return matchesSearchText;
  } else if (hasSelectedCategory) {
    return matchesSelectedCategory;
  } else if (hasSelectedProjectTypes) {
    return matchesSelectedProjectTypes;
  }
  return true;
}
