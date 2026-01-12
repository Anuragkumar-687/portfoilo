/** @type {import('next').NextConfig} */

// Patch for Node 23+ (which has a native localStorage)
// This causes hydration mismatches/issues in Next.js
if (typeof global !== "undefined" && typeof global.localStorage !== "undefined") {
	Object.defineProperty(global, "localStorage", {
		value: undefined,
		writable: true,
	});
}

const nextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	images: { unoptimized: true },
	webpack: (config, { isServer }) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
	// Add experimental features to handle client pages properly
	experimental: {
	}
};

module.exports = nextConfig;