import { colors } from '../loggers/colors';
export declare type AlphabetUppercase =
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';
export declare type AlphabetLowercase =
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z';

interface flags {
    short?: AlphabetLowercase | AlphabetUppercase;
    long?: string;
    default?: string;
    required: boolean;
    description: description;
}

interface description {
    short: string;
    long?: string;
}

export const SHORT_DESCRIPTION = 'Build OpenAPI specification from HAR.';

export const HAR: flags = {
    long: 'har',
    required: true,
    description: {
        short: 'har file path',
        long: `\tThe HTTP Archive format(HAR), is JSON formatted archive file format for logging of a web browswer's intraction with site.
        To generate the HAR file for your existion application use Chrome,Firefox,Safari,Internet Explorer,Edge.
        To generate the HAR file for new projects use Insomania REST Clint Desktop application.`
    }
};
export const HOST: flags = {
    short: 'h',
    long: 'host',
    required: false,
    description: {
        short: 'Filter the http request from HAR and use it as server url in output.',
        long:
            'Host name is mandatore field to build openapi sepcification by default it will be first request url in HAR.'
    }
};
export const BASE_PATH: flags = {
    short: 'b',
    long: 'base-path',
    required: true,
    description: {
        short: "Separate the common path as base path from HTTP requests. Example:['api/v1']",
        long: '\tBase path of the end point'
    },
    default: ''
};
export const PATH_REGEX: flags = {
    short: 'r',
    long: 'path-param-regex',
    required: false,
    description: {
        short: 'Convert Regex matching params into dynamic path ',
        long: `\tIn request URL regex matching path parameter will be converted into ${colors.Bright}${
            colors.fg.Green
        }dynamic path parameters${colors.Reset}.\n\tPassed value converted into Regular experssion by using ${
            colors.Bright
        }${colors.fg.Cyan}new RegExp()${colors.Reset}(JavaScript)`
    },
    default: `${getDefault('[0-9]|[-$@!~%^*()_+]')}`
};
export const SECURITY_HEADERS: flags = {
    short: 's',
    long: 'security-headers',
    required: false,
    description: {
        short: 'Map matching HTTP headers into security headers on request.',
        long: `\tTo map custom security headers link 'x-api-key' as autorization header.

            ${getTitle('Syntax')}
                {
                    "${colors.fg.Red}headerNameInHTTPRequest${colors.Reset}": {Sequrity Scheme Object as per OAS3.0}
                }

            ${getTitle('Example')}
                {
                    "${colors.fg.Green}x-api-key${colors.Reset}": {
                        "name": "X-API-KEY,
                        "type": "apiKey",
                        "in": "headers"
                    }
                }
        `
    },
    default: `${getDefault('{}')}`
};
export const TEMPLATE: flags = {
    short: 't',
    long: 'template',
    required: false,
    description: {
        short: 'To override the default template pass the your template file location.',
        long: '\tYou can override the default template by passing your template file location.'
    },
    default: `${getDefault('Avantation Template')}`
};
export const DIABLE_TAG: flags = {
    long: 'disable-tag',
    required: false,
    description: {
        short: 'Diable end points grouping based on route path in HAR'
    },
    default: `${getDefault('false')}`
};

export const STATIC_UI_LOGO: flags = {
    long: 'static-ui-logo',
    required: false,
    description: {
        short: 'Static-UI logo file location'
    }
};

export const BUILD_STATIC_UI: flags = {
    long: 'build-static-ui',
    required: false,
    description: {
        short: 'Build the static user interface from generated OpenAPI3.0 specification.'
    },
    default: `${getDefault('false')}`
};

export const HTTP_SNIPPET: flags = {
    long: 'http-snippet',
    required: false,
    description: {
        short: "Generate HTTP smaple code snippet for request and appedn it as 'x-code-sample' to OpenAPI path object."
    },
    default: `${getDefault('false')}`
};

export const _JSON: flags = {
    short: 'j',
    long: 'json',
    description: {
        short: 'Write output result in JSON format.'
    },
    required: false,
    default: `${getDefault('false')}`
};
export const PIPE: flags = {
    short: 'p',
    long: 'pipe',
    description: {
        short: 'Pipe the result into next command'
    },
    required: false,
    default: `${getDefault('false')}`
};

export const OUT: flags = {
    short: 'o',
    long: 'out',
    description: {
        short: 'Write output result at this DEST location.'
    },
    required: false,
    default: `${getDefault('./avantation.yaml')}`
};

export const INFO = `
Avantion is command-line tool (avantation --help)
${SHORT_DESCRIPTION}

${getTitle('Usages')}

  avantation [options]

Avantation will search HTTP requested and build the Request body,Query Parameter,Path Parameter Object based on host and base path pattern matching in har file and save the all the results on avantation.yaml

By default output file will be written on current working directory.To change the output file location use ${
    colors.fg.Yellow
}-o, --out${colors.Reset}.

${getTitle('Example')}

${getExample()}

${getTitle('Options')}
`;

export let manual: flags[] = [
    HAR,
    HOST,
    BASE_PATH,
    PATH_REGEX,
    SECURITY_HEADERS,
    TEMPLATE,
    DIABLE_TAG,
    HTTP_SNIPPET,
    BUILD_STATIC_UI,
    STATIC_UI_LOGO,
    _JSON,
    OUT
];

function getTitle(title: string) {
    return `${colors.Bright}${colors.fg.Magenta}${title}${colors.Reset}`;
}

function getExample() {
    return `  ${colors.fg.Green}avantation${colors.Reset} ${colors.fg.Yellow}--har${colors.Reset} example.com.har ${
        colors.fg.Yellow
    }-h${colors.Reset} apis.example.com ${colors.fg.Yellow}-b${colors.Reset} v1 ${colors.fg.Yellow}-o${
        colors.Reset
    } ./example.json`;
}

function getDefault(defaut: string): string {
    return `\t${colors.Bright}${colors.fg.Red}default:${colors.Reset} ${colors.Bright}${colors.fg.White}${defaut}${
        colors.Reset
    }`;
}
