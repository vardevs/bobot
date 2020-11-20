process.env.LOG_LEVEL = 'fatal'

const { Application } = require('probot')

const bobot = require('../bobot.js')

describe('bobot', () => {
    let bo
    let context = {
        issue: jest.fn(),
        github: {
            issues: {
                createComment: jest.fn(),
                edit: jest.fn(),
            }
        }
    }

    let config = {
        closeComment: 'foobar'
    }

    beforeEach(() => {
        bo = bobot(context, config)
    })

    test(
        'close and comment on issue',
        async () => {
            await bo.close()
            expect(context.github.issues.createComment).toHaveBeenCalled()
            expect(context.github.issues.edit).toHaveBeenCalled()
        }
    )
})
