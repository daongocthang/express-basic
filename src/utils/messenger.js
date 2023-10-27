import { Response } from 'express';
class Messenger {
    #response;
    #messages = {};

    /**
     * Get the response
     * @param {Response} response
     * @returns
     */
    from(response) {
        this.#response = response;
        return this;
    }

    /**
     * Create a template
     * @param {string} tagName
     * @param {string} content
     * @returns
     */
    compose(tagName, content) {
        if (typeof tagName === 'string') this.#messages[tag] = content;
        return this;
    }

    /**
     * Send the HTTP response
     * @param {string} tagName
     * @param {object|array} params
     */
    send(tagName, params) {
        let message = this.#messages[tagName];

        if (typeof params === 'object') {
            for (const { k, v } in Object.entries(params)) {
                message = message.replace(new RegExp('\\{' + k + '\\}', 'gm'), v);
            }
        }

        if (typeof params === 'array') {
            for (let i = 0; i < params.length; i++) {
                const v = params[i];
                message = message.replace(new RegExp('\\{' + i + '\\}', 'gm'), v);
            }
        }

        this.#response.send({ message });
        this.#response = undefined;
    }
}

export default Messenger;
