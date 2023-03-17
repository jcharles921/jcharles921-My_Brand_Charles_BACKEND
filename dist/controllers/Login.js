// import userModel from "../models/userModel.js"
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
import allErr_Success from "../utils/allErr_Success.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
var loginController = function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var _req_body, email, password, user, comparedHashedPassword, token, tokenUser, error;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_body = req.body, email = _req_body.email, password = _req_body.password;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        User.findOne({
                            email: email
                        })
                    ];
                case 2:
                    user = _state.sent();
                    if (!!user) return [
                        3,
                        3
                    ];
                    allErr_Success.loginFail(res);
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        bcrypt.compare(password, user.password)
                    ];
                case 4:
                    comparedHashedPassword = _state.sent();
                    if (!comparedHashedPassword) {
                        allErr_Success.loginFail(res);
                    } else {
                        token = jwt.sign({
                            isAdmin: user.isAdmin
                        }, process.env.SECRET, {
                            expiresIn: "1h"
                        });
                        res.cookie("authorized", token, {
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 7
                        });
                        tokenUser = jwt.sign({
                            realUser: true
                        }, process.env.SECRET, {
                            expiresIn: "1h"
                        });
                        res.cookie("authorization", tokenUser, {
                            httpOnly: true,
                            maxAge: 1000 * 60 // 1h
                        });
                        // allErr_Success.loginSuccess(res, user, token);
                        allErr_Success.loginSuccess(res, user, token);
                    }
                    _state.label = 5;
                case 5:
                    return [
                        3,
                        7
                    ];
                case 6:
                    error = _state.sent();
                    allErr_Success.serverError(res, error.message);
                    return [
                        3,
                        7
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    return function loginController(req, res) {
        return _ref.apply(this, arguments);
    };
}();
export default loginController;
