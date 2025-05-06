// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);


const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default config
const defaultConfig = getDefaultConfig(__dirname);

// Your custom config (can add custom options here)
const customConfig = {
  // Example: transformer, resolver, etc.
};

// Merge the default and custom configs
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged config with Reanimated config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
