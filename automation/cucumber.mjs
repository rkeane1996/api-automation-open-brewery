import { DEFAULT_THEME } from '@cucumber/pretty-formatter'

export default {
    format: ["./reporting/reporter.mjs", 'html:reporting/cucumber-report/cucumber-report.html'],
    formatOptions: {
      theme: {
        ...DEFAULT_THEME,
        'step text': 'magenta'
      }
    },
    paths: ['tests/features/*.feature'],
    require: [ 
        'tests/step-definitions/**/*.steps.ts',
    ],
    requireModule: [
        'ts-node/register'
      ]
  }
