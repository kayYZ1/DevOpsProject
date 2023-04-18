pipeline {
    agent any
    stages {
        stage ("Checkout") {
            checkout([$class: 'GitSCM', branches: [[name: 'CI/CD']],
            userRemoteConfigs: [[url: 'https://github.com/kayYZ1/DevOpsTask.git']]])
        }
        stage ("Tests") {
            steps {
                dir ("client") {
                    sh "npm install"
                    sh "npm test"
                }
            }
        }
        stage("Build") {
            sh 'docker build -t kayYZ1/devopsTask:client-latest client'
            sh 'docker build -t kayYZ1/devopsTask:server-latest server'
            sh 'docker build -t kayYZ1/devopsTask:nginx-latest nginx'
        }
        stage("Deploy") {
            sh "echo Deploy"
        }
    }
}