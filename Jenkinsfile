pipeline {
  agent any
stages {
    stage('Build') {
     steps {
       nodejs('node-9.4.0') {
        sh 'npm install'
        sh 'npm lint'
        sh  'npm test'
        sh 'npm run build'
      }
     }
    }
  }
}
