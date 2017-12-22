declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void
}

declare var process: {
  env: {
    NODE_ENV: string,
    APP_ENV: string,
    BASE_URL: string
  }
}

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any
}

declare var EnzymeShallow: any
declare var EnzymeRender: any
declare var EnzymeMount: any

// for style loader
// declare module '*.scss' {
//   const styles: any
//   export = styles
// }
