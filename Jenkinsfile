pipeline {
    agent any

    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"
        DOCKER_IMAGE = "react-static"
        DOCKER_TAG = "${BUILD_ID ?: 'latest'}"
        CONTAINER_NAME = "react-static-${BUILD_NUMBER}"
        GOOGLE_CHAT_WEBHOOK = "https://chat.googleapis.com/v1/spaces/AAQAaQR_SNA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=RR8wTSfb0py5U2VnLa53xYIJp2yYxVSWV4wP4ovXPxk"
        DEPLOYMENT_URL = "http://localhost:8080"
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
        HOST_PORT = "8080"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/birajshrestha72/Portfolio-website-Business.git'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${env.DOCKER_IMAGE}:${env.DOCKER_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh """
                    docker push ${env.DOCKER_IMAGE}:${env.DOCKER_TAG}
                    docker tag ${env.DOCKER_IMAGE}:${env.DOCKER_TAG} ${env.DOCKER_IMAGE}:latest
                    docker push ${env.DOCKER_IMAGE}:latest
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    docker run -d \
                        --name ${env.CONTAINER_NAME} \
                        -p ${env.HOST_PORT}:80 \
                        ${env.DOCKER_IMAGE}:${env.DOCKER_TAG}
                """
            }
        }
    }

    post {
        always {
            script {
                echo 'Always run cleanup or logging here'
            }
        }

        success {
            script {
                def message = """
                🚀 *Deployment Successful* 
                *Build*: #${env.BUILD_NUMBER}
                *Image*: ${env.DOCKER_IMAGE}:${env.DOCKER_TAG}
                *Container*: ${env.CONTAINER_NAME}
                """
                sendGoogleChatNotification(message)
            }
        }

        failure {
            script {
                def logs = sh(
                    script: "docker logs --tail 50 ${env.CONTAINER_NAME} 2>&1 || true",
                    returnStdout: true
                ).trim()

                def message = """
                🔴 *Deployment Failed* 
                *Build*: #${env.BUILD_NUMBER}
                *Error*: ${currentBuild.currentResult}
                *Logs*: ${logs}
                """
                sendGoogleChatNotification(message)
            }
        }
    }
}

def sendGoogleChatNotification(String message) {
    def payload = """
    {
        "text": "${message.replaceAll('"', '\\\\"').replaceAll('\n', '\\\\n')}"
    }
    """
    sh """
        curl -X POST \
        -H 'Content-Type: application/json' \
        -d '${payload}' \
        '${GOOGLE_CHAT_WEBHOOK}' || echo "Notification failed"
    """
}
