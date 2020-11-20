module.exports = (context, config) => {
    const { owner, repo } = config

    return {
        close: async _ => {
            const issueComment = context.issue({ body: config['closeComment'] })
            const issueClosed = context.issue({ state: 'closed' })

            await context.github.issues.createComment(issueComment)
            await context.github.issues.edit(issueClosed)
        }
    }
}
