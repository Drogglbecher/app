# App

An app approach using react native in the front and rust in the back ;)

## CLI

`yarn deps`: Does all necessary installations and resolves dependencies
`yarn run:android`: Starts the app on an android device

## Requirements

- [yarn](https://yarnpkg.com/en/)
- [rustup](https://rustup.rs/)

### Android

- [jdk 8](https://aur.archlinux.org/packages/jdk8/)
- [android snk](https://aur.archlinux.org/packages/android-ndk/)
- [android sdk](https://aur.archlinux.org/packages/android-sdk/)

#### Rusty architectures

```
rustup target add aarch64-linux-android
rustup target add armv7-linux-androideabi
rustup target add i686-linux-android
```

#### Setup Emulator

To setup an android emulator without installing bloaty IDEs like Android
studio you can stick to the command line tools which are at least under
the hood. First you need the basic [android emulator](https://aur.archlinux.org/packages/android-emulator).


Then an android virtual device (AVD) is needed. There is a management tool
dealing with these AVDs withing the `<androidSDK>/tools/bin` dir called
`avdmanager`.

First a specific SDK is loaded:
```
<android_sdk>/tools/bin/sdkmanager "<sdk_id>"
```
An SDK ID could be e.g. "system-images;android-25;google_apis;x86".

Possible device IDs could be accessed by a call to
```
avdmanager list device
```

At least a new AVD can be created with
```
avdmanager create avd -n nexus6 -k "system-images;android-25;google_apis;x86" -d 10
```
and the emulation can be started withing the `<android_sdk>/tools` dir:
```
emulator -avd nexus6
```

#### Hints

You have to accept the licenses of android SDK.
```
cd <android_sdk>/tools/bin
./sdkmanager --licenses
```
