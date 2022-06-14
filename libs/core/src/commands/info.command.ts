export class InfoCommand {
  constructor() {
    let info: string = `Инфо о проекте:\n`;
    info += `Version: 1.0.0\n`
    info += `NodeJS: v18.3.0\n`
    info += `TypeScript: v4.7.3\n`

    return info;
  }
}