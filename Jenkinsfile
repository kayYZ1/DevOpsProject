pipeline {
    agent any
    stages {
        stage ("Checkout") {
            steps {
                git branch: 'CI/CD', url: "https://github.com/kayYZ1/DevOpsTask.git"
            }
        }
        stage ("Test") {
            steps {
                dir ("client") {
                    sh "npm install"
                    sh "npm --version"
                    sh "npm test"
                }
            }
        }
        stage ("Build") {
            steps {
                sh 'docker build -t devopstask:client-latest client'
                sh 'docker build -t devopstask:server-latest server'
                sh 'docker build -t devopstask:nginx-latest nginx'
            }
        }
        stage ("Deploy") {
            steps {
                sh "Push images to Docker hub (ToDo)"
            }
        }
    }
}
