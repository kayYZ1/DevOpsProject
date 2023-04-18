pipeline {
    agent any
    stages {
        stage ("checkout") {
            checkout scm
        }
        stage ("test") {
            steps {
                dir ("client") {
                    sh "npm install"
                    sh "npm test"
                }
            }
        }
        stage("build") {
            sh 'docker build -t kayYZ1/devopsTask:client-latest client'
            sh 'docker build -t kayYZ1/devopsTask:server-latest server'
            sh 'docker build -t kayYZ1/devopsTask:nginx-latest nginx'
        }
        stage("deploy") {
            sh "echo Deploy"
        }
    }
}