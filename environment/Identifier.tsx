enum GAIA_ACTIONS {
    CLEAR = "GAIA_CLEAR",
    CONNECT = "GAIA_CONNECT",
    PUBLISH = "GAIA_PUBLISH",
    DISCONNECT = "GAIA_DISCONNECT"
}

enum GAIA_LISTENER {
    CONTEXT = "GAIA_CONTEXT",
    TEXT = "GAIA_TEXT",
    LOG = "GAIA_LOG",
    NOTIFICATION = "GAIA_NOTIFICATION",
    DISCONNECTED = "GAIA_DISCONNECTED",
}

enum CONNECTION_STATE {
    CONNECTING,
    CONNECTED,
    DISCONNECTED
}

enum CONVEY_EVENT {
    ON_TEXT_MESSAGE = "onTextMessage",
    ON_CONTEXT_MESSAGE = "onContextMessage",
}

export {
    GAIA_ACTIONS,
    GAIA_LISTENER,
    CONNECTION_STATE,
    CONVEY_EVENT
}
