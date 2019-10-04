module.exports = {
  name: 'ngx-ol',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-ol',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
