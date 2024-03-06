const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/goal.png","assets/selection.png","assets/training.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1qXOjQls.js","app":"_app/immutable/entry/app.BjWMLhQC.js","imports":["_app/immutable/entry/start.1qXOjQls.js","_app/immutable/chunks/entry.BxhVr8Ol.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index.aL_LTlol.js","_app/immutable/entry/app.BjWMLhQC.js","_app/immutable/chunks/scheduler.mo3GjxGz.js","_app/immutable/chunks/index.CHcdWJ8_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C7EVOa-0.js')),
			__memo(() => import('./chunks/1-CGO0RSAl.js')),
			__memo(() => import('./chunks/2-BtkXqdbJ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
