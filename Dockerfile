FROM golang:latest
ARG HOST=0.0.0.0
ARG PORT=9000
ARG PASS
ENV GO111MODULE=on
ENV GOFLAGS=-mod=vendor
ENV APP_ENV ${APP_ENV}
ENV host ${HOST}
ENV port ${PORT}
ENV email ryanmccauley211@gmail.com
ENV pass ${PASS}
ENV APP_LOC /ryanjames
WORKDIR $APP_LOC
ADD . $APP_LOC
RUN go build -o main .
EXPOSE $PORT
CMD ["/ryanjames/main"]