import { colors as Colors } from "./colors";
// this.oclif(colors.bg.Blue, colors.fg.White , "I am white message with blue background", colors.Reset); example
export class OclifLogger {
  oclif: any;
  constructor(oclif: any) {
    this.oclif = oclif;
  }
  colorizeString(message: string, colors: any[]) {
    let prependColors = "";
    for (const color of colors) {
        prependColors = prependColors + `${color}`
    }
      return prependColors + message + `${Colors.Reset}`;
  }

  log(message: any): void {
    this.oclif.log(message);
  }

  info(message: any): void {
    this.oclif.log(message);
  }

  warn(message: any): void {
    this.oclif.warn(message);
  }

  error(message: any): void {
    this.oclif.error(message);
  }

  logSucess(head: string): void {
      this.oclif.log(`${this.colorizeString('✔', [Colors.Bright, Colors.fg.Green])} ${head}`);
  }
}
