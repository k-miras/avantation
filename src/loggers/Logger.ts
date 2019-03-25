import {colors} from "./colors";
// console.log(colors.bg.Blue, colors.fg.White , "I am white message with blue background", colors.Reset); example
export class Logger {
    static log = function(message: any): void {
        console.log(message);
    };

    static info = function(message: any): void {
        console.log(colors.Bright, message, colors.Reset);
    };

    static warn = function(message: any): void {
        console.log(colors.fg.White, message, colors.Reset);
    };

    static error = function(message: any): void {
        console.log(colors.fg.Red, message, colors.Reset);
    };

    static green = function(message: any): void {
        console.log(colors.fg.Green, message, colors.Reset);
    };
}
