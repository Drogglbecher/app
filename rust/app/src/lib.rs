#[cfg(feature = "jni")]
#[allow(non_snake_case)]
pub mod android {
    extern crate jni;

    use self::jni::JNIEnv;
    use self::jni::objects::{JClass, JString};
    use self::jni::sys::jstring;

    #[no_mangle]
    pub unsafe extern "C" fn Java_com_app_AppBridge_helloWorld(
        env: JNIEnv,
        _: JClass,
        name: JString,
    ) -> jstring {
        let name: String = env.get_string(name).unwrap().into();
        let resp = format!("Hello {}!", name);
        env.new_string(resp).unwrap().into_inner()
    }
}
