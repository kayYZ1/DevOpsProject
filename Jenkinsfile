pipeline {
    agent any
    stages {
        stage ("Checkout") {
            steps {
                git branch: 'main', url: "https://github.com/kayYZ1/DevOpsTask.git"
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
        stage ("Save artifacts") {
            steps {
                sh "docker save devopstask:client-latest -o devopstask:client-latest.tar"
                sh "docker save devopstask:server-latest -o devopstask:server-latest.tar"
                sh "docker save devopstask:nginx-latest -o devopstask:nginx-latest.tar"
                archiveArtifacts artifacts: "devopstask:client-latest.tar", allowEmptyArchive: true, 
                onlyIfSuccesful: true
                archiveArtifacts artifacts: "devopstask:server-latest.tar", allowEmptyArchive: true, 
                onlyIfSuccesful: true
                archiveArtifacts artifacts: "devopstask:nginx-latest.tar", allowEmptyArchive: true, 
                onlyIfSuccesful: true
            }
        }
    }
}
