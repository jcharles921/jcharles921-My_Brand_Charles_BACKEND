function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
import jwt from "jsonwebtoken";
import getCookie from "../utils/cookies.js";
var protection = /*#__PURE__*/ function() {
    "use strict";
    function protection() {
        _classCallCheck(this, protection);
    }
    _createClass(protection, null, [
        {
            key: "isProtected",
            value: function isProtected(req, res, next) {
                return _asyncToGenerator(function() {
                    var token, splitedToken, decoded;
                    return __generator(this, function(_state) {
                        token = req.headers.authorized;
                        //    console.log(req.headers)
                        if (!token) {
                            res.status(401).json({
                                message: "no token Provided"
                            });
                        } else {
                            splitedToken = token.split("=")[1];
                            decoded = jwt.verify(token, process.env.SECRET);
                            if (!decoded.isAdmin) {
                                return [
                                    2,
                                    res.status(401).json({
                                        message: "You are not authorized to access this route"
                                    })
                                ];
                            }
                            next();
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "isProtectedUser",
            value: function isProtectedUser(req, res, next) {
                return _asyncToGenerator(function() {
                    var token, splitedToken, decoded;
                    return __generator(this, function(_state) {
                        token = req.headers.authorization;
                        //    console.log(req.headers)
                        if (!token) {
                            res.status(401).json({
                                message: "no token Provided"
                            });
                        } else {
                            splitedToken = token.split("=")[1];
                            decoded = jwt.verify(token, process.env.SECRET);
                            if (!decoded) {
                                return [
                                    2,
                                    res.status(401).json({
                                        message: "You are not authorized to access this route"
                                    })
                                ];
                            }
                            next();
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return protection;
}();
export default protection;
