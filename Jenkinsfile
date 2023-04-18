pipeline {
    agent any
    stages {
        stage ("Versions") {
            steps {
                sh "sh npm --version"
                sh "sh docker --version"
            }
        }
        stage ("Checkout") {
            steps {
                git branch: 'CI/CD', url: "https://github.com/kayYZ1/DevOpsTask.git"
            }
        }
        stage ("Test") {
            steps {
                dir ("client") {
                    sh "npm install"
                    sh "npm test"
                }
            }
        }
        stage("Build") {
            steps {
                sh 'docker build -t kayYZ1/devopsTask:client-latest client'
                sh 'docker build -t kayYZ1/devopsTask:server-latest server'
                sh 'docker build -t kayYZ1/devopsTask:nginx-latest nginx'
            }
        }
        stage("Deploy") {
            steps {
                sh "echo Deploy"
            }
        }
    }
}