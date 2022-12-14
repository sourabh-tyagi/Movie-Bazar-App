FROM tomcat:9.0.8-jre8-alpine

COPY target/loginuser-0.0.1-SNAPSHOT.jar /usr/local/tomcat/webapps/
RUN chmod -R 777 /usr/local/tomcat/webapps/loginuser-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["catalina.sh", "run"]