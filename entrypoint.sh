#!/bin/bash

# Adding this entrypoint.sh so that we can easily see the logs and compare the build time between the two approaches

echo "--------------------------------------------------"

# First approach with plugin enabled
echo "Generating build with @nestjs/swagger plugin ENABLED (build time is way FASTER)"
pnpm build-with-plugin

echo "--------------------------------------------------"

# Second approach with plugin disabled
echo "Generating build with @nestjs/swagger plugin DISABLED (build time is way SLOWER)"
pnpm build-without-plugin

echo "--------------------------------------------------"
echo "Compare the 'webpack 5.96.1 compiled successfully in XXXX ms' time between the two approaches. Somehow with the plugin enabled the build time is way faster than when disabled, which does not make any sense, as @nestjs/swagger does not work with swc-loader anyways so it should not impact the build time (impacting positively somehow)."
