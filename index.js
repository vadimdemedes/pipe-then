'use strict';

/**
 * Dependencies
 */

const finished = require('end-of-stream');


/**
 * Expose fn
 */

module.exports = pipe;


/**
 * Stream piping for generator/promise-based projects
 */

function pipe (source, destination) {
  return new Promise(function (resolve) {
    source.pipe(destination);

    finished(destination, resolve);
  });
}
