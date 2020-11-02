pipeline {
    agent any
    }
    stages {
        stage('deneme') {
            steps {
                sh """
                cat <<EOF >> Dockerfile
		FROM alpine
                ENTRYPOINT ["sleep", "3600"]
		EOF
		"""
                sh 'docker build .'
            }
        }
       
    }
}