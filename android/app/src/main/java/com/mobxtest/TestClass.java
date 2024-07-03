package com.mobxtest;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestClass extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    TestClass(@Nullable ReactApplicationContext reactApplicationContext)
    {
        super(reactApplicationContext);
        this.reactContext = reactApplicationContext;
    }
    public static String name ="TestModule";
    @NonNull
    @Override
    public String getName() {
        return name;
    }

    @ReactMethod
    public void sayHello(String s)
    {
        System.out.println("Saying Hellow : "+s);
//        Toast.makeText(reactContext, "Saying Hello, "+s,Toast.LENGTH_LONG);
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(reactContext, "Saying Hello: " + s, Toast.LENGTH_SHORT).show();
            }
        });
    }
    @ReactMethod
    public void sayHelloWithPromise(String s, Promise promise)
    {
        promise.resolve("Receiving a string from Native Android."+"String passed : "+s);

    }

    @ReactMethod
    public void getBatteryHealth(Promise promise) {
        IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        Intent batteryStatus = reactContext.registerReceiver(null, ifilter);

        int health = batteryStatus.getIntExtra(BatteryManager.EXTRA_HEALTH, -1);
        String healthString;

        switch (health) {
            case BatteryManager.BATTERY_HEALTH_GOOD:
                healthString = "Good";
                break;
            case BatteryManager.BATTERY_HEALTH_OVERHEAT:
                healthString = "Overheat";
                break;
            case BatteryManager.BATTERY_HEALTH_DEAD:
                healthString = "Dead";
                break;
            case BatteryManager.BATTERY_HEALTH_OVER_VOLTAGE:
                healthString = "Over Voltage";
                break;
            case BatteryManager.BATTERY_HEALTH_UNSPECIFIED_FAILURE:
                healthString = "Unspecified Failure";
                break;
            case BatteryManager.BATTERY_HEALTH_COLD:
                healthString = "Cold";
                break;
            default:
                healthString = "Unknown";
                break;
        }

        // Resolve the promise with the battery health string
        promise.resolve(healthString);
    }
}
