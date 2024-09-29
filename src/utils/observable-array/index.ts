export function ObservableArray(init: Array<any> = []) {

  const observers = new Set<(operation: string, args: any, result: any) => void>();

  const notifyObservers = (operation: string, args: any, result: any) => {
    observers.forEach(callback => callback(operation, args, result));
  };

  const arrayMethods = ['push', 'pop', 'splice', 'shift', 'unshift', 'sort', 'reverse'];

  return new Proxy(init, {
    get(target, property, receiver) {
      // Si on accède à une méthode de tableau, la redéfinir pour inclure la notification
      if (arrayMethods.includes(property as string)) {
        return (...args: any[]) => {
          const result = Array.prototype[property].apply(target, args);
          // Notifier les observateurs du changement
          notifyObservers(property as string, args, result);
          return result;
        };
      }

      return Reflect.get(target, property, receiver);
    },

    set(target, property, value, receiver) {
      const oldValue = target[property];
      const result = Reflect.set(target, property, value, receiver);

      if (oldValue !== value) {
        notifyObservers('set', { index: property, value }, result);
      }

      return result;
    },
  });
}

ObservableArray.prototype.subscribe = function (callback: (operation: string, args: any, result: any) => void) {
  this.observers.add(callback);
};

ObservableArray.prototype.unsubscribe = function (callback: (operation: string, args: any, result: any) => void) {
  this.observers.delete(callback);
};
