export function Page(options) {
    return () => {
        return new Promise((next) => {
            Promise.all((options.plugins ? options.plugins : []).reduce((plugins, pluginFn) => {
                plugins.push(pluginFn());
                return plugins;
            }, []))
                .then((loading) => {
                // next( render( options.template , document.createElement('div') ).parentNode as HTMLElement );
            })
                .catch((error) => {
            });
        });
    };
}
//# sourceMappingURL=page.js.map