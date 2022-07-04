export function setStateAction(type, payload) {
    return { type, payload };
}

export function actionMarker(type, payload, callback) {
    return { type, payload, callback };
}