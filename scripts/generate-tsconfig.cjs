const fs = require('fs');
const path = require('path');

console.log({ env : process.env.NODE_ENV })

const pwd = process.env.PWD ? process.env.PWD : process.pwd();
const env = process.env.NODE_ENV || 'development';

const tsconfig = {
  compilerOptions: {
    module: "ESNext",
    target: "ESNext",
    declaration: true,
    sourceMap: true,
    rootDir: "./src",
    outDir: env === 'production' ? "./prod" : "./dist",
    removeComments: false,
    preserveConstEnums: true,
    skipLibCheck: true,
    moduleResolution: "node",
    strict: false,
    noImplicitAny: false,
    esModuleInterop: true,
    resolveJsonModule: true
  },
  include: [
    "src/**/*.ts"
  ],
  exclude: [
    "node_modules"
  ]
};

fs.writeFileSync(path.resolve(pwd, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
console.log(`tsconfig.json generated for ${env} environment.`);
