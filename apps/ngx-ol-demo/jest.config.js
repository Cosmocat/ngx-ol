module.exports = {
  name: 'ngx-ol-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-ol-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
