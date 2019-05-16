FROM python:3.7-alpine

# Alternatively use ADD https:// (which will not be cached by Docker builder)
RUN apk --no-cache add curl \
    && echo "Pulling watchdog binary from Github." \
    && curl -sSLf https://github.com/openfaas-incubator/of-watchdog/releases/download/0.5.0/of-watchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog \
    && apk del curl --no-cache

# RUN apk --no-cache add musl-dev gcc make

WORKDIR /root/

RUN apk add --no-cache --update \
        curl \
        bash \
        build-base \
        ca-certificates \
        git \
        bzip2-dev \
        linux-headers \
        ncurses-dev \
        openssl \
        openssl-dev \
        readline-dev \
        sqlite-dev

COPY requirements.txt   .
RUN  pip install --no-cache-dir  -r requirements.txt
COPY index.py           .

RUN mkdir -p function
RUN touch ./function/__init__.py
WORKDIR /root/function/
COPY function/requirements.txt	.
RUN pip install -r requirements.txt

WORKDIR /root/
COPY function           function

ENV fprocess="python index.py"

ENV cgi_headers="true"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:5000"

HEALTHCHECK --interval=5s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
