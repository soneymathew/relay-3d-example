import {type Issue} from '../mocks/types';
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

export function issueSorter(
  a: Issue,
  b: Issue,
  sortField: string,
  sortDirection: string,
) {
  let firstValue: string = '';
  let secondValue: string = '';
  switch (sortField.toLowerCase()) {
    case 'created':
      firstValue = (a?.fields?.created ?? '').toUpperCase();
      secondValue = (b?.fields?.created ?? '').toUpperCase();
      break;
    case 'updated':
      firstValue = (a?.fields?.updated ?? '').toUpperCase();
      secondValue = (b?.fields?.updated ?? '').toUpperCase();
      break;
    case 'key':
      firstValue = (a?.key ?? '').toUpperCase();
      secondValue = (b?.key ?? '').toUpperCase();
      break;
    case 'summary':
      firstValue = (a?.fields?.summary ?? '').toUpperCase();
      secondValue = (b?.fields?.summary ?? '').toUpperCase();
      break;
    case 'assignee':
      firstValue = (a?.fields?.assignee?.displayName ?? '').toUpperCase();
      secondValue = (b?.fields?.assignee?.displayName ?? '').toUpperCase();
      break;
    case 'reporter':
      firstValue = (a?.fields?.reporter?.displayName ?? '').toUpperCase();
      secondValue = (b?.fields?.reporter?.displayName ?? '').toUpperCase();
      break;
    default:
      firstValue = a.id.toUpperCase();
      secondValue = b.id.toUpperCase();
  }
  return firstValue === secondValue
    ? 0
    : sortDirection === 'DESC'
    ? firstValue > secondValue
      ? -1
      : 1
    : firstValue < secondValue
    ? -1
    : 1;
}
