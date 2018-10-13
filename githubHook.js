const PubSub = require('@google-cloud/pubsub');
const depFiles = require('./depfiles.json');

// export pubsub for testing
const pubsub = new PubSub();
exports.pubsub = pubsub;

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
  processChanges(packageChanges);
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
            packageChanges.push({
              repo: data.repository.full_name,
              file: change,
              language: depFile.language,
              event: key
            });
          }
        }
      }
    }
  }
  return packageChanges;
}

/**
 * Given a list of changes, queue events
 * @param changes
 */
function processChanges(changes) {
  changes.forEach(x => {
    const topic = pubsub.topic(x.language);
    topic.publisher().publish(Buffer.from(JSON.stringify(x)));
  });
  console.log(changes);
}
