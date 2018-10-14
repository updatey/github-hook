const assert = require('assert');
const path = require('path');
const hook = require('../src/githubHook.js');
const {EventEmitter} = require('events');

/**
 * Create a GitHub event mock endpoint
 * @param {*} event
 * @param {*} body
 */
function getMock (event, body) {
  return {
    body,
    headers: {
      'x-github-event': event
    }
  };
}

/**
 * Create a pubsub mock endpoint
 */

class PubSubMock extends EventEmitter {
  topic (name) {
    const self = this;
    return {
      publisher: () => {
        return {
          publish: buffer => {
            self.emit('publish', {
              name,
              buffer
            });
          }
        };
      }
    };
  }
}

hook.pubsub = new PubSubMock();

it('should reject changes against non-master branches', done => {
  const body = require(path.join(__dirname, 'fixtures/responseOnNotMaster.json'));
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  };
  hook.pubsub.on('publish', res => {
    assert.fail('publish should not happen here');
  });
  hook.githubHook(req, res);
});

it('should detect changes to package.json', done => {
  const body = require(path.join(__dirname, 'fixtures/responseWithChanges.json'));
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  };
  hook.pubsub.on('publish', res => {
    assert(res);
    assert(res.language, 'JavaScript');
  });
  hook.githubHook(req, res);
});
