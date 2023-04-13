pipeline {
    agent any
    environment {
                DOCKER_USERNAME = credentials('kayz29')
                DOCKER_PASSWORD = credentials('4Hce47ADkrRo5mi22Y4WXgZYe')
    }
    stages {
        stage("Checkout") {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'CI/CD']], extensions: [], 
                userRemoteConfigs: [[url: 'https://github.com/kkayz22/JenkinsForeplayXD.git']]])
            }
        }
        stage("Tests") {
            steps {
                dir('client') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        stage("Build images") {
            steps {
                sh 'docker build -t kayz/devops-app:client-latest client'
                sh 'docker build -t kayz/devops-app:server-latest server'
                sh 'docker build -t kayz/devops-app:nginx-latest nginx'
            }
        }
        stage('Push Images to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', 
                passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push kayz/devops-app:client-latest'
                    sh 'docker push kayz/devops-app:server-latest'
                    sh 'docker push kayz/devops-app:nginx-latest'
                }
            }
        }
    }
}






