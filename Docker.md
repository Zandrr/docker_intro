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


first we build the Dockerfile:

```
FROM fedora
MAINTAINER "Alex Campbell" <campbellalex11@gmail.com>

RUN yum -y update && yum clean all
RUN yum -y install npm && yum clean all


ADD . /src

RUN cd /src; npm install

EXPOSE 8000

CMD["node", "/src/index.js"]


```


Then let's build the simple nodejs app:


```javascript


var express = require('express'),
    http = require('http'),
    app = express(); // Make app using Express framework
app.set('port', 8000);
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log("Listening on port " + app.get('port'));
});
app.get('/', function(req, res) {
    res.send("Docker is so cool!");
});

```


We can now run ```docker build -t nodejs . ``` to create a new docker image.  This example can be found in the nodejs folder.

We now have a image inside of a container that is completely modularized. If the server breaks, we can just reload the docker image and be ready to work again.  In addition, developers no longer need to worry about their development environment.  They can just load up the nodejs container and start working.  It will seamlessly work on all computers.