const depFiles = [
  {
    file: 'package.json',
    language: 'JavaScript'
  },
  {
    file: 'Gemfile',
    language: 'Ruby'
  },
  {
    file: 'requirements.txt',
    language: 'Python'
   },
   {
    file: 'composer.json',
    language: 'PHP'
   }
];

/**
 * Trigger from the GitHub event API for new commits and PullRequests
 * @param {HttpRequest} req
 * @param {HttpResponse} res
 */
exports.githubHook = (req, res) => {
  const eventType = req.headers['X-GitHub-Event'];
  const data = req.body;
  if (!data || !data.ref || !data.commits || data.commits.length === 0) {
    console.log('No data, ref, or commits. Skipping.');
    res.end();
    return;
  }
  const branchParts = data.ref.split('/');
  const branch = branchParts[branchParts.length-1];
  if (branch !== 'master') {
    console.log('No changes to the master branch. Skipping.');
    res.end();
    return;
  }
  const packageChanges = getPackageChanges(data);
  if (packageChanges.length === 0) {
    console.log('No changes to package files. Skipping.');
    res.end();
    return;
  }
  console.log(packageChanges);
  //const file = getFile()
  res.end();
}

/**
 * Determine if the GitHub commit contains a change to package metadata.
 * @param {GitHubEvent} data
 */
function getPackageChanges(data) {
  const commitChangeKeys = ['added', 'modified', 'removed'];
  const packageChanges = [];
  for (const commit of data.commits) {
    for (const key of commitChangeKeys) {
      const changes = commit[key];
      for (const change of changes) {
        for (const depFile of depFiles) {
          if (change === depFile.file) {
            console.log(`DEPFILE DETECTED!!!!1`);
            packageChanges.push({ change, type: depFile.language });
          }
        }
      }
    }
  }
  return packageChanges;
}

function getFile(path) {
  console.log(`Process ${path}...`)
  //GET /repos/:owner/:repo/contents/:path
}
