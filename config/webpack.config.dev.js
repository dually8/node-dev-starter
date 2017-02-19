import common from './webpack.config.common';
import merge from 'webpack-merge';

const devConfig = {
    devtool: 'inline-source-map'
}

export default merge(common, devConfig);
