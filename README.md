# Unhandled Error in Node.js HTTP Server

This repository demonstrates an example of an unhandled error in a Node.js HTTP server.  The server simulates an asynchronous operation that can fail and throws an error without proper handling. This leads to the server crashing.  The solution demonstrates how to properly handle this using the 'error' event on the server object.

## Bug
The `bug.js` file contains the buggy code. The server occasionally simulates a network error and throws an exception within the asynchronous callback to `createServer`.  Because this error isn't caught, the process crashes. 

## Solution
The `bugSolution.js` file shows the corrected code. The solution uses the `'error'` event listener to gracefully handle errors that occur within the server. This prevents the server from crashing and allows it to continue running.

## How to Run
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled error. 
4. Run `node bugSolution.js` to see the corrected version. 