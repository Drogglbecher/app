package com.app;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AppBridge extends ReactContextBaseJavaModule {
    static {
        System.loadLibrary("app");
    }

    @Override
    public String getName() {
        return "AppBridge";
    }

    public AppBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void sayHello(String name, Promise promise) {
        promise.resolve(helloWorld(name));
    }

    private static native String helloWorld(String name);
}
