const mocha = require('mocha');
const assert = require('assert');
const path = require('path');
const hook = require('../githubHook.js');

function getMock(event, body) {
  return {
    body,
    headers: {
      'x-github-event': event
    }
  };
}

it('should reject changes against non-master branches', done => {
  const body = require(path.join(__dirname, 'fixtures/responseOnNotMaster.json'));
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  }
  hook.githubHook(req, res);
});

it('should detect changes to package.json', done => {
  const body = require(path.join(__dirname, 'fixtures/responseWithChanges.json'));
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  }
  hook.githubHook(req, res);
});

