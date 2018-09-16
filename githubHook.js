

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
  const data = req.body;
  if (!data || !data.ref || !data.commits || data.commits.length === 0) {
    console.log('No data, ref, or commits.  Skipping.');
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
  console.log(`COMMITS: ${data.commits.length}`);
  for (const commit in data.commits) {
    console.log(`COMMIT: ${commit.id}`);
    for (const key in commitChangeKeys)
      console.log(`KEY: ${key}`);{
      const changes = commit[key];
      for (const change in changes) {
        console.log(`CHANGE: ${change}`);
        for (const depFile in depFiles) {
          console.log(`DEPFILE: ${depFile.file}`);
          if (change === depFile.file) {
            console.log(`DEPFILE DETECTED!!!!1`);
            packageChanges.push({ change, type });
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
