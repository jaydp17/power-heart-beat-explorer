# power-heart-beat-explorer

A really simple webapp built using Preact ⚛ & hosted on Firebase 🔥, to check if Electricity is there @ my house 😬.

It's available at https://⚡️.jaydp.com

## How does it get the data?
There a Raspberry PI at my house which runs [github.com/jaydp17/power-heart-beat-pi](https://github.com/jaydp17/power-heart-beat-pi) and sends data about electricity 💡 or internet 🌐 connection to Firebase Database.

## How to deploy?
```sh
# install local deps
$ yarn

# deploy using firebase-tools
$ yarn deploy:prod
```

## License

MIT
