export const DEFINER_REGEX = /DEFINER\s*['"]([\w.@]+)['"]/gi;
export const COLLATE_REGEX = /COLLATE\s*=\s*(\w+)/gi;
export const ENGINE_REGEX = /ENGINE\s*=\s*(\w+)/gi;
export const AUTO_INCREMENT_REGEX = /AUTO_INCREMENT\s*=\s*(\d+)/gi;
export const DEFAULT_CHARSET_REGEX = /DEFAULT CHARSET\s*=\s*(\w+)/gi;

export const CREATE_TABLE_REGEX = /CREATE\s+TABLE/gi;

export const TABLE_RULES = [
    DEFINER_REGEX,
    COLLATE_REGEX,   
];