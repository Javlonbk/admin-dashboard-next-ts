(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_09a9c9._.js", {

"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = (()=>{
    const e = new Error("Cannot find module '../../../../client/has-base-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/use-intersection.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIntersection", {
    enumerable: true,
    get: function() {
        return useIntersection;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _requestidlecallback = (()=>{
    const e = new Error("Cannot find module './request-idle-callback'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const hasIntersectionObserver = typeof IntersectionObserver === 'function';
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ''
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/get-domain-locale.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/get-domain-locale.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/get-domain-locale.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(()=>{});
    const cleanupB = (0, _react.useRef)(()=>{});
    return (0, _react.useMemo)(()=>{
        if (!refA || !refB) {
            return refA || refB;
        }
        return (current)=>{
            if (current === null) {
                cleanupA.current();
                cleanupB.current();
            } else {
                cleanupA.current = applyRef(refA, current);
                cleanupB.current = applyRef(refB, current);
            }
        };
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/link.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/link.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/link.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    var _headManager_mountedInstances;
                    headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/amp-mode.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isInAmpMode", {
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
});
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        'image/webp'
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    var _pattern_pathname;
    if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        const actualProto = url.protocol.slice(0, -1);
        if (pattern.protocol !== actualProto) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern));
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    var _pattern_pathname;
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
}]);

//# sourceMappingURL=_09a9c9._.js.map