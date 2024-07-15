import { Observable } from "@microsoft/fast-element";
export class ObservableObject extends Object {
    static init(initialObject) {
        let observabe = new ObservableObject(initialObject);
        return observabe.createProxy();
    }
    $data = {};
    constructor(initialObject) {
        super();
        Object.keys(initialObject).forEach((key) => {
            this.set(key, initialObject[key]);
        });
    }
    ;
    set = (key, value) => {
        this.$data[`_${key}`] = value;
        Observable.defineProperty(this.$data, key);
        return this.$data[key];
    };
    createProxy() {
        return new Proxy(this.$data, {
            get(store, propKey) {
                let result = undefined;
                try {
                    result = store[propKey];
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    return result;
                }
            },
            set(store, propKey, value) {
                if (store[propKey]) {
                    store[propKey] = value;
                }
                else {
                    store[`_${propKey}`] = value;
                    Observable.defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
}
//# sourceMappingURL=models.js.map