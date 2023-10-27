import sanitizeHtml from 'sanitize-html';

export const str = {
    format: (s, list) => {
        let i = list.length;
        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), list[i]);
        }
        return s;
    },
    empty: (s) => !s || s.length === 0,
    sanitize: (s) => sanitizeHtml(s),
};
