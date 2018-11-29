const isDev = process.env.NODE_ENV !== 'production';

let commonConfig = {}
if (isDev) 
    module.exports = {
        ...commonConfig
    };
else //production config
    module.exports = {
        ...commonConfig
    };
