# App

## CLI

- `yarn deps`: Does all necessary installations and resolves dependencies
- `yarn run:android`: Starts the app on an android device

## Requirements

- [yarn](https://yarnpkg.com/en/)
- [rustup](https://rustup.rs/)

### Android

- [jdk 8](https://aur.archlinux.org/packages/jdk8/)
- [android ndk](https://aur.archlinux.org/packages/android-ndk/) (set `NDK_HOME` var)
- [android sdk](https://aur.archlinux.org/packages/android-sdk/)

#### Crosscompiling

For crosscompiling purposes the following targets have to be added.
This step is included within `yarn deps`.

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
dealing with these AVDs located at the `<androidSDK>/tools/bin` dir called
`avdmanager`.

First a specific SDK should be loaded:
```
<android_sdk>/tools/bin/sdkmanager <sdk_id>
```
A SDK ID could be e.g. `"system-images;android-25;google_apis;x86"`. The list of
SDK IDs cand be accessed with
```
<android_sdk>/tools/bin/sdkmanager --list
```

Device IDs for creating an emulator (e.g. Nexus5) could be accessed by a call to
```
<android_sdk>/tools/bin/avdmanager list device
```

At least a new AVD can be created with
```
<android_sdk>/tools/bin/avdmanager create avd -n <avd_name> -k <sdk_id> -d <device_id>
```
The emulation can be started at the `<android_sdk>/tools` dir:
```
emulator -avd <avd_name>
```

#### Hints

You have to accept the licenses of android SDK.
```
<android_sdk>/tools/bin/sdkmanager --licenses
```

When you have problems with the tools `sdkmanager` or `avdmanager` please see the
following [solution](https://stackoverflow.com/questions/47150410/failed-to-run-sdkmanager-list-android-sdk-with-java-9)
