// https://your-domain.atlassian.net/rest/api/3/search?jql=ORDER%20BY%20created%20DESC&maxResults=100&fields=id,issuetype,priority,key,summary,assignee,reporter,status,resolution,resolutiondate,created,updated,duedate,labels,parent,project,creator
// TODO: replace below content with the above API response
import {type IssueSearchResult} from '../types';

const apiResponse: IssueSearchResult = {
  expand: 'schema,names',
  startAt: 0,
  maxResults: 100,
  total: 5745,
  issues: [],
};

export default apiResponse;
