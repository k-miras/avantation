import * as path from "path";
import * as HAR from './Har';
import * as OAS from './OpenApi';

export interface URLResult {
    path: string;
    tag?: string;
    defaultTag: string;
    queryParams: OAS.ParameterObject[];
    pathParams: OAS.ParameterObject[];
    servers?: OAS.ServerObject;
}

export interface Snippet {
    lang: string;
    source: string;
}

export interface URL {
    slashes: boolean;
    protocol: string;
    hash: string;
    query: string;
    pathname: string;
    auth: string;
    host: string;
    port: string;
    hostname: string;
    password: string;
    username: string;
    origin: string;
    href: string;
}

export interface Path {
    value: string;
    params: OAS.ParameterObject[];
    tag: string | undefined;
}

export interface PathItemInfo {
    tag: string;
    comment?: string;
}

export interface build {
    paths: OAS.PathsObject;
}

export interface InputConfig {
    har: HAR.Final;
    host: string;
    basePath: string;
    template: OAS.Template;
    out: string;
    pathParamRegex: string;
    pipe: boolean;
    json: boolean;
    disableTag: boolean;
    securityHeaders: OAS.SecurityMap;
    uiLogo?: string;
    'build-static-ui': boolean;
    'http-snippet': boolean;
}

export class AbstractConfigurable implements InputConfig {
    har: HAR.Final;
    host: string;
    basePath: string;
    template: OAS.Template;
    out: string;
    pathParamRegex: string;
    pipe: boolean;
    json: boolean;
    disableTag: boolean;
    securityHeaders: OAS.SecurityMap;
    uiLogo?: string;
    'build-static-ui': boolean;
    'http-snippet': boolean;
    constructor(input: InputConfig) {

             this.har = input.har;
             this.host = input.host;
             this.basePath = input.basePath;
             this.pathParamRegex = input.pathParamRegex;
             this.pipe = input.pipe;
             this.json = input.json;
             this.template = input.template;
             this.out = input.out;
             this.disableTag = input.disableTag;
             this.securityHeaders = input.securityHeaders;
        if (input.uiLogo) {
                 this.uiLogo = path.resolve(input.uiLogo);
             }
             this['build-static-ui'] = input['build-static-ui'];
             this['http-snippet'] = input['http-snippet'];
         }
        }