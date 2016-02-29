var path = require('path');
var Builder = require('systemjs-builder');

var config = {
  baseURL: '../',
  defaultExtension:true,
  map: {
    "deepstream.io-client-js/dist/deepstream": "node_modules/deepstream.io-client-js/dist/deepstream",
    "rxjs/Observable": "node_modules/rxjs/Observable"
  },
  ignore: [
    "../node_modules"
  ],
  packages: {
    "../DeepstreamRx": {
      defaultExtension: "js"
    },
    "../node_modules": {
      defaultExtension: "js"
    }
  }
}

//build('deepstream-rx-client/DeepstreamRxClient', '../dist/client/DeepstreamRxClient.js', '../dist/global/DeepstreamRxClient.js');
//build('deepstream-rx-client/Record', '../dist/record/Record.js', '../dist/global/Record.js');
//build('deepstream-rx-client/List', '../dist/record/List.js', '../dist/global/List.js');

//build("deepstream-rx-client/DeepstreamRxClient", "../dist/global/DeepstreamDxClientx.js","../dist/global/DeepstreamDxClient.min.js");

var builder = new Builder(config.baseURL, config);

builder.bundle("DeepstreamRx/index.js", "../dist/bundle.js").then(function() {
    console.log('Build complete');
    process.exit(0);
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
    process.exit(1);

  });
/**
builder.bundle("DeepstreamRx/index.js", "../dist/client.bundle.js").then(function() {
    console.log('Build complete');
    process.exit(0);
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
    process.exit(1);

  });*/
process.stdin.resume();