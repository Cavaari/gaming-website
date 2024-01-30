module.exports = {
    webpack: (config, { dev }) => {
        // Phaser webpack config
        config.module.rules.push({
            test: [/\.vert$/, /\.frag$/],
            use: 'raw-loader',
        });

        return config;
    },
};
