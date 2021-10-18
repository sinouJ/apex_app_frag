module.exports = {
    invalidPassword: {
        "message": "Invalid password",
        "type": "warning",
        "showIcon": true,
        "dismiss": {
            "manually": true,
            "automatically": true
        },
        "duration": 10000,
        "showDurationProgress": true,
        "appearance": "light"
    },
    forbiddenUser: {
        "message": "This user is not allowed to register, please contact admin",
        "type": "alert",
        "showIcon": true,
        "dismiss": {
            "manually": true,
            "automatically": true
        },
        "duration": 10000,
        "showDurationProgress": true,
        "appearance": "light"
    },
    userNotFound: {
        "message": "Unknown username",
        "type": "alert",
        "showIcon": true,
        "dismiss": {
            "manually": true,
            "automatically": true
        },
        "duration": 10000,
        "showDurationProgress": true,
        "appearance": "light"
    }
}