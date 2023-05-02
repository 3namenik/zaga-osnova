module.exports = {
    apps: [
        {
            name: 'next',
            instance_var: 'INSTANCE_ID',
            script: 'npm run start',
            watch: ["server", "client"],
            wait_ready: true,
            env: { NODE_ENV: "production" }
        },
    ]
}