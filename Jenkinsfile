pipeline {
  agent any
  stages {
    stage("verify tools") {
      steps {
        sh '''
          docker version
          docker info
          docker compose version
          curl --version
          jq --version
        '''
      }
    }
    stage("Prune docker data") {
      steps {
        sh 'docker system prune -a --volumes -f'
      }
    }
    stage("Start container") {
      steps {
        sh 'docker image rm jpmadrigal/mrrcrm-api-dev:latest'
        sh 'docker build --no-cache -f ./docker/api/Dockerfile -t jpmadrigal/mrrcrm-api-dev .'
        sh 'docker push jpmadrigal/mrrcrm-api-dev:latest'
      }
    }
  }
}