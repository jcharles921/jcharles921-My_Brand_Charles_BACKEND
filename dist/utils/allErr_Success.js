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
var allErr_Success = /*#__PURE__*/ function() {
    "use strict";
    function allErr_Success() {
        _classCallCheck(this, allErr_Success);
    }
    _createClass(allErr_Success, null, [
        {
            key: "failureMsg",
            value: function failureMsg(res, status, msg) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(status).json({
                            message: msg
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "serverError",
            value: function serverError(res, errorMsg) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(500).json({
                            message: errorMsg
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "successMsg",
            value: function successMsg(res, status, msg, data) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(status).json({
                            message: msg,
                            data: data
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "loginFail",
            value: function loginFail(res) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(401).json({
                            message: "Invalid Credentials",
                            status: 401
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "loginSuccess",
            value: function loginSuccess(res, user, token) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(200).json({
                            data: {
                                isAdmin: user.isAdmin,
                                email: user.email,
                                name: user.username
                            },
                            token: token,
                            status: 200
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "signupSuccess",
            value: function signupSuccess(res, user) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        res.status(201).json({
                            message: "New User successfully created",
                            // data: user
                            email: user.email,
                            isAdmin: user.isAdmin,
                            status: 201
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "signupFail",
            value: function signupFail(error, res) {
                return _asyncToGenerator(function() {
                    return __generator(this, function(_state) {
                        if (error.code === 11000) {
                            res.status(403).json({
                                message: "Email already exists",
                                status: 403
                            });
                        } else {
                            res.status(500).json({
                                message: error.message
                            });
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return allErr_Success;
}();
export default allErr_Success;
