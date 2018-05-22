package com.mx.ito.sga.module.app.dao;

import com.mx.ito.sga.module.app.models.UserData;

import java.util.HashMap;

public class UserDAO {

    private static HashMap<String, UserData> userDataHashMap;

    {
        userDataHashMap = new HashMap<>();
        userDataHashMap.put("15011213Test01", new UserData(15011213, "Julio", "Perez",
                "Ingenieria en Sistemas Computacionales", 85, 60));
        userDataHashMap.put("15011270Test02", new UserData(15011270, "Damian", "Zamora",
                "Ingenieria en Sistemas Computacionales", 90, 60));
    }

    public UserData getUserByControlNumberAndPassword(int controlNumber, String password) {
        return userDataHashMap.get(controlNumber + password);
    }
}
