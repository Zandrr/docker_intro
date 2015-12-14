#Docker 

Alright let's first install docker.  Since I'm running OSX, I used vagrant to get a quick Feodra 21 box.  I then simply installed Docker using: ```yum -y install docker```


The first thing we're going to do is download a docker image.


```docker pull fedora```

The Docker client sends a request to the  Docker daemon running on our local system.  This will then connect to the public remote Docker Index (Docker Hub) and download the image.  We can easily search for images using ```docker search <TERM>```

List images using ```docker images```


To run our image we type the following command:

```docker run -i -t --name=f21 fedora /bin/bash```

This will run docker in interactive mode and allocates a psuedo-tty with a name of "f21" and it will run the ```/bin/bash``` command.

Okay let's build a docker file to serve a node.js app: