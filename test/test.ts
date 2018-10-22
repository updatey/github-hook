import * as assert from 'assert';
import {EventEmitter} from 'events';
import * as proxyquire from 'proxyquire';
import {PackageChange} from '../src';

interface PubSubMessage {
  name: string;
  buffer: Buffer;
}

/**
 * Create a GitHub event mock endpoint
 * @param {*} event
 * @param {*} body
 */
function getMock(event: string, body: {}) {
  return {body, headers: {'x-github-event': event}};
}

/**
 * Create a pubsub mock endpoint
 */
class PubSubMock extends EventEmitter {
  topic(name: string) {
    const self = this;
    return {
      publisher: () => {
        return {
          publish: (buffer: Buffer) => {
            self.emit('publish', {name, buffer});
          }
        };
      }
    };
  }
}

const service = proxyquire('../src', {'@google-cloud/pubsub': PubSubMock});

it('should reject changes against non-master branches', async done => {
  const body = require('../../test/fixtures/responseOnNotMaster.json');
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  };
  const handler = () => {
    assert.fail('publish should not happen here');
  };
  service.pubsub.on('publish', handler);
  await service.githubHook(req, res);
  service.pubsub.removeListener('publish', handler);
});

it('should detect changes to package.json', done => {
  const body = require('../../test/fixtures/responseWithChanges.json');
  const req = getMock('push', body);
  const res = {
    end: () => {
      done();
    }
  };
  service.pubsub.on('publish', (message: PubSubMessage) => {
    const data: PackageChange = JSON.parse(message.buffer.toString());
    assert.strictEqual(message.name, 'JavaScript');
    assert.strictEqual(data.language, 'JavaScript');
  });
  service.githubHook(req, res);
});
