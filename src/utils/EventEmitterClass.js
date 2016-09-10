export default class EventEmitterClass {
    listeners = {};

    _emit(event, ...args) {
        let self = this;
        if (arguments.length > 0) {
            let event = arguments[0];
            if (self.listeners[event]) {
                if (self.listeners[event]) {
                    self.listeners[event].forEach(callback => {
                        callback(...args);
                    });
                }
            }
        }
    }

    on(event, callback) {
        let self = this;
        if (typeof callback === 'function') {
            if (!self.listeners[event]) {
                self.listeners[event] = [];
            }
            self.listeners[event].push(callback);
        } else {
            throw new TypeError('A callback should be a valid function')
        }
    }
}
