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
import post from "../models/blogModel.js";
import allErr_Success from "../utils/allErr_Success.js";
var CRUD = /*#__PURE__*/ function() {
    "use strict";
    function CRUD() {
        _classCallCheck(this, CRUD);
    }
    _createClass(CRUD, null, [
        {
            key: "getAllPosts",
            value: function getAllPosts(req, res) {
                return _asyncToGenerator(function() {
                    var allPosts, e;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                console.log("all the posts are here");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    post.find()
                                ];
                            case 2:
                                allPosts = _state.sent();
                                allErr_Success.successMsg(res, 200, "All posts", allPosts);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e = _state.sent();
                                allErr_Success.failureMsg(res, 404, "No posts found");
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createPost",
            value: function createPost(req, res) {
                return _asyncToGenerator(function() {
                    var _req_body, title, content, imageUrl, commentSection, createdAt, newPost, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                console.log("post created");
                                _req_body = req.body, title = _req_body.title, content = _req_body.content, imageUrl = _req_body.imageUrl, commentSection = _req_body.commentSection, createdAt = _req_body.createdAt;
                                newPost = new post({
                                    title: title,
                                    content: content,
                                    commentSection: commentSection,
                                    imageUrl: imageUrl,
                                    createdAt: createdAt
                                });
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    newPost.save()
                                ];
                            case 2:
                                _state.sent();
                                // res.status(201).json({data:newPost});
                                allErr_Success.successMsg(res, 201, "Post created", newPost);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                res.status(409).json({
                                    message: error.message
                                });
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "upddatePost",
            value: function upddatePost(req, res) {
                return _asyncToGenerator(function() {
                    var _req_body, title, content, imageUrl, id, thepostToUpdate, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _req_body = req.body, title = _req_body.title, content = _req_body.content, imageUrl = _req_body.imageUrl;
                                id = req.params.id;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    post.findByIdAndUpdate(id, {
                                        title: title,
                                        content: content,
                                        imageUrl: imageUrl
                                    }, {
                                        new: true
                                    })
                                ];
                            case 2:
                                thepostToUpdate = _state.sent();
                                allErr_Success.successMsg(res, 200, "Post updated", thepostToUpdate);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                allErr_Success.failureMsg(res, 404, "Post not found");
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deletePost",
            value: function deletePost(req, res) {
                return _asyncToGenerator(function() {
                    var _id, deleted_post, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                console.log(req.params);
                                _id = req.params.id;
                                return [
                                    4,
                                    post.findByIdAndDelete(_id)
                                ];
                            case 1:
                                deleted_post = _state.sent();
                                console.log(deleted_post);
                                if (deleted_post) {
                                    allErr_Success.successMsg(res, 200, "Post deleted", deleted_post);
                                }
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                console.log(error);
                                allErr_Success.failureMsg(res, 404, "Post not found");
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getPostById",
            value: function getPostById(req, res) {
                return _asyncToGenerator(function() {
                    var id, thePost, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                id = req.params.id;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    post.findById(id)
                                ];
                            case 2:
                                thePost = _state.sent();
                                allErr_Success.successMsg(res, 200, "Post found", thePost);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                allErr_Success.failureMsg(res, 404, "Post not found");
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CRUD;
}();
export { CRUD };
