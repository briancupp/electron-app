import store from 'electron-store';

const SCHEMA = {
    token: {
        type: 'string'
    },
    watching: {
        type: 'array',
        items: [
            {
                type: 'object',
                required: ['path', 'timestamp'],
                properties: {
                    path: { type: 'string', format: 'uri' },
                    timestamp: { type: 'number' }
                }
            }
        ]
    }
};

class Store {
    constructor(options) {
        this.store = new store({ scheme: SCHEMA, ...options });
    }

    clear() {
        this.store.clear();
    }

    add(key, value) {
        let current = this.get(key);
        current.push({ path: value, timestamp: null });
        this.store.set(key, current);
    }

    get(key, default_value) {
        return this.store.get(key, default_value);
    }

    remove(key, value = null) {
        if (value) {
            let current = this.get(key);
        } else {
            this.store.delete(key);
        }
    }
}

export default Store;
