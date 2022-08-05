const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "9d92692e529508dd15262e04abb10126f98dd509",
      options: {
        'sonar.projectKey':'ecu-academy',
        'sonar.projectName': 'ecu-academy',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': 'src',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )