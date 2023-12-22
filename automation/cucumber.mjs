export default {
    format: ["./reporting/reporter.mjs", 'html:reporting/cucumber-report/cucumber-report.html'],
    paths: ['tests/features/*.feature'],
    require: [ 
        'tests/step-definitions/**/*.steps.ts',
    ],
    requireModule: [
        'ts-node/register'
      ]
  }
