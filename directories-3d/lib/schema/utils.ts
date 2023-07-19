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
    case 'due':
      firstValue = (a?.fields?.duedate ?? '').toUpperCase();
      secondValue = (b?.fields?.duedate ?? '').toUpperCase();
      break;
    case 'resolved':
      firstValue = (a?.fields?.resolutiondate ?? '').toUpperCase();
      secondValue = (b?.fields?.resolutiondate ?? '').toUpperCase();
      break;
    case 'key':
      firstValue = (a?.key ?? '').toUpperCase();
      secondValue = (b?.key ?? '').toUpperCase();
      break;
    case 'parent':
      firstValue = (a?.fields?.parent?.fields?.summary ?? '').toUpperCase();
      secondValue = (b?.fields?.parent?.fields?.summary ?? '').toUpperCase();
      break;
    case 'summary':
      firstValue = (a?.fields?.summary ?? '').toUpperCase();
      secondValue = (b?.fields?.summary ?? '').toUpperCase();
      break;
    case 'assignee':
      firstValue = (
        a?.fields?.assignee?.displayName ?? 'Unassigned'
      ).toUpperCase();
      secondValue = (
        b?.fields?.assignee?.displayName ?? 'Unassigned'
      ).toUpperCase();
      break;
    case 'reporter':
      firstValue = (a?.fields?.reporter?.displayName ?? '').toUpperCase();
      secondValue = (b?.fields?.reporter?.displayName ?? '').toUpperCase();
      break;
    case 'creator':
      firstValue = (a?.fields?.creator?.displayName ?? '').toUpperCase();
      secondValue = (b?.fields?.creator?.displayName ?? '').toUpperCase();
      break;
    case 'issuetype':
      firstValue = (a?.fields?.issuetype?.name ?? '').toUpperCase();
      secondValue = (b?.fields?.issuetype?.name ?? '').toUpperCase();
      break;
    case 'priority':
      firstValue = (a?.fields?.priority?.name ?? '').toUpperCase();
      secondValue = (b?.fields?.priority?.name ?? '').toUpperCase();
      break;
    case 'status':
      firstValue = (a?.fields?.status?.name ?? '').toUpperCase();
      secondValue = (b?.fields?.status?.name ?? '').toUpperCase();
      break;
    case 'statuscategory':
      firstValue = (a?.fields?.status?.statusCategory.name ?? '').toUpperCase();
      secondValue = (
        b?.fields?.status?.statusCategory.name ?? ''
      ).toUpperCase();
      break;
    case 'project':
      firstValue = (a?.fields?.project?.name ?? '').toUpperCase();
      secondValue = (b?.fields?.project?.name ?? '').toUpperCase();
      break;
    case 'resolution':
      firstValue = (a?.fields?.resolution?.name ?? 'Unresolved').toUpperCase();
      secondValue = (b?.fields?.resolution?.name ?? 'Unresolved').toUpperCase();
      break;
    case 'fixversion':
      firstValue = (
        a?.fields?.fixVersions?.map((v) => v.name).join(',') ?? ''
      ).toUpperCase();
      secondValue = (
        b?.fields?.fixVersions?.map((v) => v.name).join(',') ?? ''
      ).toUpperCase();
      break;
    case 'affectedversion':
      firstValue = (
        a?.fields?.versions?.map((v) => v.name).join(',') ?? ''
      ).toUpperCase();
      secondValue = (
        b?.fields?.versions?.map((v) => v.name).join(',') ?? ''
      ).toUpperCase();
      break;
    case 'component':
      firstValue = (
        a?.fields?.components?.map((c) => c.name).join(',') ?? ''
      ).toUpperCase();
      secondValue = (
        b?.fields?.components?.map((c) => c.name).join(',') ?? ''
      ).toUpperCase();
      break;
    case 'labels':
      firstValue = (a?.fields?.labels?.join(',') ?? '').toUpperCase();
      secondValue = (b?.fields?.labels?.join(',') ?? '').toUpperCase();
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
