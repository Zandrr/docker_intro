FROM fedora
MAINTAINER "Alex Campbell" <campbellalex11@gmail.com>

RUN yum -y update && yum clean all
RUN yum -y install npm && yum clean all


ADD . /src

RUN cd /src; npm install

EXPOSE 8000

CMD["node", "/src/index.js"]