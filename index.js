/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */

const getConfig = require('probot-config')

const bobot = require('./bobot.js')

const events = [
    'issues.opened',
]

module.exports = async ({ app }) => {
    app.log.info('Bobot is operational')  

    app.on(events, act)

    async function act (context) {
        const config = await getConfig(context, 'bobot.yml')
        const bo = bobot(context, config)
    }
}

