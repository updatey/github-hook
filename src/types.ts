
export interface GitHubChange {
  ref: string;
  commits: GitHubCommit[];
  repository: GitHubRepository;
}

export interface GitHubRepository {
  full_name: string;
}

export interface GitHubCommit {
  added: string[];
  removed: string[];
  modified: string[];
}

// Example output.  Only things that are needed have been added to types.
// {
//   "ref": "refs/heads/master",
//   "before": "19fa78a56ddb777b1d855b6df7b4bc4f4cc75c93",
//   "after": "9786a7e0029cd5e641d285addc73c68e5b0b001f",
//   "created": false,
//   "deleted": false,
//   "forced": false,
//   "base_ref": null,
//   "compare":
//   "https://github.com/JustinBeckwith/cloudcats/compare/19fa78a56ddb...9786a7e0029c",
//   "commits": [
//     {
//       "id": "9786a7e0029cd5e641d285addc73c68e5b0b001f",
//       "tree_id": "ee58c4fe6fb8e0976de61e8059aade6d3519db70",
//       "distinct": true,
//       "message": "Change a dependency",
//       "timestamp": "2018-09-16T19:07:49-07:00",
//       "url":
//       "https://github.com/JustinBeckwith/cloudcats/commit/9786a7e0029cd5e641d285addc73c68e5b0b001f",
//       "author": {
//         "name": "Justin Beckwith",
//         "email": "beckwith@google.com",
//         "username": "JustinBeckwith"
//       },
//       "committer": {
//         "name": "Justin Beckwith",
//         "email": "beckwith@google.com",
//         "username": "JustinBeckwith"
//       },
//       "added": [

//       ],
//       "removed": [

//       ],
//       "modified": [
//         "package.json"
//       ]
//     }
//   ],
//   "head_commit": {
//     "id": "9786a7e0029cd5e641d285addc73c68e5b0b001f",
//     "tree_id": "ee58c4fe6fb8e0976de61e8059aade6d3519db70",
//     "distinct": true,
//     "message": "Change a dependency",
//     "timestamp": "2018-09-16T19:07:49-07:00",
//     "url":
//     "https://github.com/JustinBeckwith/cloudcats/commit/9786a7e0029cd5e641d285addc73c68e5b0b001f",
//     "author": {
//       "name": "Justin Beckwith",
//       "email": "beckwith@google.com",
//       "username": "JustinBeckwith"
//     },
//     "committer": {
//       "name": "Justin Beckwith",
//       "email": "beckwith@google.com",
//       "username": "JustinBeckwith"
//     },
//     "added": [

//     ],
//     "removed": [

//     ],
//     "modified": [
//       "package.json"
//     ]
//   },
//   "repository": {
//     "id": 53607357,
//     "node_id": "MDEwOlJlcG9zaXRvcnk1MzYwNzM1Nw==",
//     "name": "cloudcats",
//     "full_name": "JustinBeckwith/cloudcats",
//     "private": false,
//     "owner": {
//       "name": "JustinBeckwith",
//       "email": "justin.beckwith@gmail.com",
//       "login": "JustinBeckwith",
//       "id": 534619,
//       "node_id": "MDQ6VXNlcjUzNDYxOQ==",
//       "avatar_url": "https://avatars2.githubusercontent.com/u/534619?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/JustinBeckwith",
//       "html_url": "https://github.com/JustinBeckwith",
//       "followers_url":
//       "https://api.github.com/users/JustinBeckwith/followers",
//       "following_url":
//       "https://api.github.com/users/JustinBeckwith/following{/other_user}",
//       "gists_url":
//       "https://api.github.com/users/JustinBeckwith/gists{/gist_id}",
//       "starred_url":
//       "https://api.github.com/users/JustinBeckwith/starred{/owner}{/repo}",
//       "subscriptions_url":
//       "https://api.github.com/users/JustinBeckwith/subscriptions",
//       "organizations_url":
//       "https://api.github.com/users/JustinBeckwith/orgs", "repos_url":
//       "https://api.github.com/users/JustinBeckwith/repos", "events_url":
//       "https://api.github.com/users/JustinBeckwith/events{/privacy}",
//       "received_events_url":
//       "https://api.github.com/users/JustinBeckwith/received_events", "type":
//       "User", "site_admin": false
//     },
//     "html_url": "https://github.com/JustinBeckwith/cloudcats",
//     "description": "CloudCats is an example of using node.js and various
//     Google Cloud APIs and services to solve the greatest question of our
//     time:  do developers prefer dogs or cats.", "fork": false, "url":
//     "https://github.com/JustinBeckwith/cloudcats", "forks_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/forks",
//     "keys_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/keys{/key_id}",
//     "collaborators_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/collaborators{/collaborator}",
//     "teams_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/teams",
//     "hooks_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/hooks",
//     "issue_events_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/issues/events{/number}",
//     "events_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/events",
//     "assignees_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/assignees{/user}",
//     "branches_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/JustinBeckwith/cloudcats/tags",
//     "blobs_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/git/blobs{/sha}",
//     "git_tags_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/git/tags{/sha}",
//     "git_refs_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/git/refs{/sha}",
//     "trees_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/git/trees{/sha}",
//     "statuses_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/statuses/{sha}",
//     "languages_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/languages",
//     "stargazers_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/stargazers",
//     "contributors_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/contributors",
//     "subscribers_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/subscribers",
//     "subscription_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/subscription",
//     "commits_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/commits{/sha}",
//     "git_commits_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/git/commits{/sha}",
//     "comments_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/comments{/number}",
//     "issue_comment_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/issues/comments{/number}",
//     "contents_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/contents/{+path}",
//     "compare_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/compare/{base}...{head}",
//     "merges_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/merges",
//     "archive_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/{archive_format}{/ref}",
//     "downloads_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/downloads",
//     "issues_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/issues{/number}",
//     "pulls_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/pulls{/number}",
//     "milestones_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/milestones{/number}",
//     "notifications_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/notifications{?since,all,participating}",
//     "labels_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/labels{/name}",
//     "releases_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/releases{/id}",
//     "deployments_url":
//     "https://api.github.com/repos/JustinBeckwith/cloudcats/deployments",
//     "created_at": 1457634462,
//     "updated_at": "2018-09-17T01:54:15Z",
//     "pushed_at": 1537150075,
//     "git_url": "git://github.com/JustinBeckwith/cloudcats.git",
//     "ssh_url": "git@github.com:JustinBeckwith/cloudcats.git",
//     "clone_url": "https://github.com/JustinBeckwith/cloudcats.git",
//     "svn_url": "https://github.com/JustinBeckwith/cloudcats",
//     "homepage": null,
//     "size": 2301,
//     "stargazers_count": 31,
//     "watchers_count": 31,
//     "language": "JavaScript",
//     "has_issues": true,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": false,
//     "forks_count": 17,
//     "mirror_url": null,
//     "archived": false,
//     "open_issues_count": 1,
//     "license": {
//       "key": "mit",
//       "name": "MIT License",
//       "spdx_id": "MIT",
//       "url": "https://api.github.com/licenses/mit",
//       "node_id": "MDc6TGljZW5zZTEz"
//     },
//     "forks": 17,
//     "open_issues": 1,
//     "watchers": 31,
//     "default_branch": "master",
//     "stargazers": 31,
//     "master_branch": "master"
//   },
//   "pusher": {
//     "name": "JustinBeckwith",
//     "email": "justin.beckwith@gmail.com"
//   },
//   "sender": {
//     "login": "JustinBeckwith",
//     "id": 534619,
//     "node_id": "MDQ6VXNlcjUzNDYxOQ==",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/534619?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/JustinBeckwith",
//     "html_url": "https://github.com/JustinBeckwith",
//     "followers_url": "https://api.github.com/users/JustinBeckwith/followers",
//     "following_url":
//     "https://api.github.com/users/JustinBeckwith/following{/other_user}",
//     "gists_url":
//     "https://api.github.com/users/JustinBeckwith/gists{/gist_id}",
//     "starred_url":
//     "https://api.github.com/users/JustinBeckwith/starred{/owner}{/repo}",
//     "subscriptions_url":
//     "https://api.github.com/users/JustinBeckwith/subscriptions",
//     "organizations_url": "https://api.github.com/users/JustinBeckwith/orgs",
//     "repos_url": "https://api.github.com/users/JustinBeckwith/repos",
//     "events_url":
//     "https://api.github.com/users/JustinBeckwith/events{/privacy}",
//     "received_events_url":
//     "https://api.github.com/users/JustinBeckwith/received_events", "type":
//     "User", "site_admin": false
//   },
//   "installation": {
//     "id": 336084
//   }
// }
