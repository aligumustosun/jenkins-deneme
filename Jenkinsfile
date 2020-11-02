pipeline {
    agent any
    }
    stages {
        stage('deneme') {
            steps {
                sh """
                cat <<EOT >> Dockerfile
		FROM alpine
                ENTRYPOINT ["sleep", "3600"]
		"""
                sh 'docker build .'
            }
        }
       
    }
}