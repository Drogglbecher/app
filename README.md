# App

An app approach using react native in the front and rust in the back ;)

## Requirements

- [yarn](https://yarnpkg.com/en/)
- [rustup](https://rustup.rs/)

### Android

- [jdk 8](https://aur.archlinux.org/packages/jdk8/)
- [android snk](https://aur.archlinux.org/packages/android-ndk/)
- [android sdk](https://aur.archlinux.org/packages/android-sdk/)

```
rustup target add aarch64-linux-android
rustup target add armv7-linux-androideabi
rustup target add i686-linux-android
```

## CLI

`yarn run:android`: Starts the app on an android device

## Hints

You have to accept the licenses of android SDK.
```
cd <SDK path>/tools/bin
./sdkmanager --licenses
```

When SDK is located within `/opt` you should make it writeable.
