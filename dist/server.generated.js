/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/edit/:userId\",\n    component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/user/:userId\",\n    component: _user_Profile__WEBPACK_IMPORTED_MODULE_5__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/users\",\n    component: _user_Users__WEBPACK_IMPORTED_MODULE_7__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/signup\",\n    component: _user_Signup__WEBPACK_IMPORTED_MODULE_6__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/signin\",\n    component: _auth_Signin__WEBPACK_IMPORTED_MODULE_2__.default\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/home/halladj/projects/js/blog/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/client/MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    textAlign: \"center\",\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: \"middle\"\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: \"auto\",\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signin(props) {\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: \"\",\n    password: \"\",\n    error: \"\",\n    redirectToReferrer: false\n  });\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    console.log(values);\n    (0,_api_auth__WEBPACK_IMPORTED_MODULE_1__.signin)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        _auth_helper__WEBPACK_IMPORTED_MODULE_2__.default.authenticate(data, () => {\n          setValues({ ...values,\n            error: \"\",\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: \"/\"\n    }\n  }; //THIS IS A FUNTION <<component>> RETURN STATEMENT\n\n  const {\n    redirectToReferrer\n  } = values;\n\n  if (redirectToReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\"))));\n}\n\n__signature__(Signin, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    email: \\\"\\\",\\n    password: \\\"\\\",\\n    error: \\\"\\\",\\n    redirectToReferrer: false,\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/auth/Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"/home/halladj/projects/js/blog/client/auth/Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"signin\": () => (/* binding */ signin),\n/* harmony export */   \"signout\": () => (/* binding */ signout)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  try {\n    let response = await fetch(\"/auth/signin/\", {\n      method: \"POST\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch(\"/auth/signout/\", {\n      method: \"GET\"\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst _default = {\n  signin,\n  signout\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/home/halladj/projects/js/blog/client/auth/api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"/home/halladj/projects/js/blog/client/auth/api-auth.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/client/auth/api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nfunction authenticate(jwt, cb) {\n  if (typeof window !== \"undefined\") {\n    sessionStorage.setItem(\"jwt\", JSON.stringify(jwt));\n  }\n\n  cb();\n}\n\nfunction isAuthenticated() {\n  if (typeof window == \"undefined\") {\n    return false;\n  }\n\n  if (sessionStorage.getItem(\"jwt\")) {\n    return JSON.parse(sessionStorage.getItem(\"jwt\"));\n  } else {\n    return false;\n  }\n}\n\nfunction clearJWT(cb) {\n  if (typeof window !== \"undefined\") {\n    sessionStorage.removeItem(\"jwt\");\n  }\n\n  cb(); //from the auth controller cuz\n\n  _api_auth__WEBPACK_IMPORTED_MODULE_0__.default.signout().then(data => {\n    document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n  });\n}\n\nconst _default = {\n  authenticate,\n  isAuthenticated,\n  clearJWT\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(authenticate, \"authenticate\", \"/home/halladj/projects/js/blog/client/auth/auth-helper.js\");\n  reactHotLoader.register(isAuthenticated, \"isAuthenticated\", \"/home/halladj/projects/js/blog/client/auth/auth-helper.js\");\n  reactHotLoader.register(clearJWT, \"clearJWT\", \"/home/halladj/projects/js/blog/client/auth/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/client/auth/auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_elmko9qf45731_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/images/elmko9qf45731.png */ \"./client/assets/images/elmko9qf45731.png\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../theme */ \"./client/theme.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    marginTop: theme.spacing(5),\n    marginBottom: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  },\n  credit: {\n    padding: 10,\n    textAlign: \"right\",\n    backgroundColor: \"#ededed\",\n    borderBottom: \"1px solid #d0d0d0\",\n    \"& a\": {\n      color: \"#3f4771\"\n    }\n  }\n}));\nfunction Home() {\n  const classes = useStyles(_theme__WEBPACK_IMPORTED_MODULE_4__.default);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n    className: classes.media,\n    image: _assets_images_elmko9qf45731_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    title: \"Unicorn Bicycle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"body2\",\n    component: \"p\"\n  }, \"No u ,I will just hit u with the reverse ONU.\")));\n}\n\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/core/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"/home/halladj/projects/js/blog/client/core/Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) {\n    return {\n      color: \"#ff4081\"\n    };\n  } else {\n    return {\n      color: \"#ffffff\"\n    };\n  }\n};\n\nconst _default = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.AppBar, {\n  position: \"static\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n  variant: \"h6\",\n  color: \"inherit\"\n}, \"NO U BIO\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n  to: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n  \"aria-label\": \"Home\",\n  style: isActive(history, \"/\")\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n  to: \"users\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/users\")\n}, \"Users\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated() &&\n/*#__PURE__*/\n//HERE GOES THE <<SIGN IN && SIGN UP>>\nreact__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/signup\")\n}, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/signin\")\n}, \"Sign In\"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n  to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated().user._id\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated().user._id)\n}, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  color: \"inherit\",\n  onClick: () => _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.clearJWT(() => history.push(\"/\"))\n}, \"Sign Out\")))));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"/home/halladj/projects/js/blog/client/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/client/core/Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/core/Menu.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: \"#5c67a3\",\n      main: \"#3f4771\",\n      dark: \"#2e355b\",\n      contrastText: \"#fff\"\n    },\n    secondary: {\n      light: \"#ff79b0\",\n      main: \"#ff4081\",\n      dark: \"#c60055\",\n      contrastText: \"#000\"\n    },\n    openTitle: \"#3f4771\",\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.pink[400],\n    type: \"light\"\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"/home/halladj/projects/js/blog/client/theme.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/client/theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/theme.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DeleteUser)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nfunction DeleteUser(props) {\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); //THE DIALOGE HANDLER METHODS\n\n  const clickButton = () => setOpen(true);\n\n  const handleRequestClose = () => setOpen(false);\n\n  const deleteAccount = () => {\n    const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.isAuthenticated();\n    (0,_user_api_user__WEBPACK_IMPORTED_MODULE_5__.remove)({\n      userId: props.userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setRedirect(true);\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.clearJWT(() => console.log(\"deleted\"));\n      }\n    });\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n    \"aria-label\": \"delete\",\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Dialog, {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContentText, null, \"Confirn to DELETE your account\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\n\n__signature__(DeleteUser, \"useState{[open, setOpen](false)}\\nuseState{[redirect, setRedirect](false)}\");\n\nDeleteUser.propTypes = {\n  userId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"/home/halladj/projects/js/blog/client/user/DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditProfile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ \"@material-ui/icons/AddPhotoAlternate\");\n/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    textAlign: \"center\",\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  title: {\n    margin: theme.spacing(2),\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: \"middle\"\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: \"auto\",\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction EditProfile({\n  match\n}) {\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__.default.isAuthenticated();\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: \"\",\n    password: \"\",\n    email: \"\",\n    about: \"\",\n    photo: \"\",\n    open: false,\n    error: \"\",\n    redirectToProfile: false\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abordController = new AbortController();\n    const signal = abordController.signal;\n    (0,_user_api_user__WEBPACK_IMPORTED_MODULE_1__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          name: data.name,\n          email: data.email,\n          about: data.about\n        });\n      }\n    });\n    return function cleanUp() {\n      abordController.abort();\n    };\n  }, [match.params.userId]);\n\n  const clickSubmit = () => {\n    let userData = new FormData();\n    values.name && userData.append(\"name\", values.name);\n    values.email && userData.append(\"email\", values.email);\n    values.about && userData.append(\"about\", values.about);\n    values.password && userData.append(\"password\", values.password);\n    values.photo && userData.append(\"photo\", values.photo);\n    (0,_user_api_user__WEBPACK_IMPORTED_MODULE_1__.update)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, userData).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    const value = name === \"photo\" ? event.target.files[0] : event.target.value;\n    setValues({ ...values,\n      [name]: value\n    });\n  };\n\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Redirect, {\n      to: \"/user/\" + values.userId\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    style: {\n      display: \"none\"\n    },\n    accept: \"image/*\",\n    type: \"file\",\n    onChange: handleChange(\"photo\"),\n    id: \"icon-button-file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"icon-button-file\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n    variant: \"contained\",\n    color: \"default\",\n    component: \"span\"\n  }, \"Uplode \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_6___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, values.photo ? values.photo.name : \" \", \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange(\"name\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    id: \"multiline-flexible\",\n    label: \"About\",\n    className: classes.textField,\n    multiline: true,\n    rows: \"2\",\n    value: values.about,\n    onChange: handleChange(\"about\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\")));\n}\n\n__signature__(EditProfile, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: \\\"\\\",\\n    password: \\\"\\\",\\n    email: \\\"\\\",\\n    about: \\\"\\\",\\n    photo: \\\"\\\",\\n    open: false,\\n    error: \\\"\\\",\\n    redirectToProfile: false,\\n  })}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/user/EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"/home/halladj/projects/js/blog/client/user/EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: \"auto\",\n    padding: theme.spacing(3),\n    marginTop: theme.spacing(5)\n  }),\n  title: {\n    marginTop: theme.spacing(3),\n    color: theme.palette.protectedTitle\n  }\n}));\nfunction Profile({\n  match\n}) {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [redirectToSignin, setRedirectToSignin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const classes = useStyles();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abordController = new AbortController();\n    const signal = abordController.signal;\n    const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__.default.isAuthenticated();\n    (0,_user_api_user__WEBPACK_IMPORTED_MODULE_2__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setUser(data);\n      }\n    });\n    return function cleanup() {\n      abordController.abort();\n    };\n  }, [match.params.userId]);\n  const photoUrl = user._id ? `/api/users/photo/${user._id}?${new Date().getTime()}` : `/api/users/defaultPhoto`;\n\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Redirect, {\n      to: \"/signin\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.List, {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n    src: photoUrl\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n    primary: user.name,\n    secondary: user.email\n  }), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__.default.isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__.default.isAuthenticated().user._id == user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: \"/user/edit/\" + user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, \"Edit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_8__.default, {\n    userId: user._id\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {\n    primary: user.about,\n    secondary: \"Joined :\" + new Date(user.created).toDateString()\n  }))));\n}\n\n__signature__(Profile, \"useState{[user, setUser]({})}\\nuseState{[redirectToSignin, setRedirectToSignin](false)}\\nuseStyles{classes}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/user/Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"/home/halladj/projects/js/blog/client/user/Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../theme */ \"./client/theme.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    textAlign: \"center\",\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: \"middle\"\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: \"auto\",\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signup() {\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    password: \"\",\n    email: \"\",\n    open: false,\n    error: \"\"\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_2__.create)(user).then(data => {\n      console.log(data);\n\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n        console.log(values);\n      } else {\n        setValues({ ...values,\n          error: \"\",\n          open: true\n        });\n        console.log(values);\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange(\"name\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange(\"email\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange(\"password\"),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Icon, {\n    color: \"error\",\n    className: classes.error\n  }, \"Error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Dialog, {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContentText, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n}\n\n__signature__(Signup, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: \\\"\\\",\\n    password: \\\"\\\",\\n    email: \\\"\\\",\\n    open: false,\\n    error: \\\"\\\",\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/user/Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"/home/halladj/projects/js/blog/client/user/Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../theme */ \"./client/theme.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(1),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n}));\nfunction User() {\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const classes = useStyles(_theme__WEBPACK_IMPORTED_MODULE_3__.default);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_user_api_user__WEBPACK_IMPORTED_MODULE_2__.list)(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n\n      return function cleanup() {\n        abortController.abort();\n      };\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"h6\",\n    className: classes.title\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.List, {\n    dense: true\n  }, users.map((item, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n      to: \"/user/\" + item._id,\n      key: i\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n      button: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Avatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n      primary: item.name\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_7___default()), null)))));\n  })));\n}\n\n__signature__(User, \"useState{[users, setUsers]([])}\\nuseStyles{classes}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/halladj/projects/js/blog/client/user/Users.js\");\n  reactHotLoader.register(User, \"User\", \"/home/halladj/projects/js/blog/client/user/Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"read\": () => (/* binding */ read),\n/* harmony export */   \"update\": () => (/* binding */ update),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async user => {\n  try {\n    let response = await fetch(\"/api/users\", {\n      method: \"POST\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst list = async signal => {\n  try {\n    let response = await fetch(\"/api/users\", {\n      method: \"GET\",\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"GET\",\n      signal: signal,\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"PUT\",\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      },\n      body: user\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch(\"/api/users/\" + params.userId, {\n      method: \"DELETE\",\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\",\n        Authorization: \"Bearer \" + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/home/halladj/projects/js/blog/client/user/api-user.js\");\n  reactHotLoader.register(list, \"list\", \"/home/halladj/projects/js/blog/client/user/api-user.js\");\n  reactHotLoader.register(read, \"read\", \"/home/halladj/projects/js/blog/client/user/api-user.js\");\n  reactHotLoader.register(update, \"update\", \"/home/halladj/projects/js/blog/client/user/api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"/home/halladj/projects/js/blog/client/user/api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.port || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"your_secret_token\",\n  mongoURI: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb://\" + (process.env.IP || \"localhost\") + \":\" + (process.env.MONGO_PORT || \"27017\") + \"/blog\"\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/home/halladj/projects/js/blog/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/config/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    //here we assusme that the email is the unique id for the user\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n      email: req.body.email\n    });\n\n    if (!user) {\n      res.status(\"401\").json({\n        error: \"user not found\"\n      });\n    }\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(401).send({\n        error: \"email and password dont match\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(\"401\").json({\n      error: \"could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed our\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret,\n  userProperty: \"auth\",\n  algorithms: [\"HS256\"]\n}); //give authorization to the user to only delete and update his\n//own information and protect others\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n}; //you have to set the Authorization header in the request to be able to access\n//protected <<authorizaed>> routes\n\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/home/halladj/projects/js/blog/server/controllers/auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"/home/halladj/projects/js/blog/server/controllers/auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"/home/halladj/projects/js/blog/server/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/home/halladj/projects/js/blog/server/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/controllers/auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/error.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/error.controller.js ***!
  \************************************************/
/***/ (() => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n//# sourceURL=webpack://blog/./server/controllers/error.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _error_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.controller.js */ \"./server/controllers/error.controller.js\");\n/* harmony import */ var _error_controller_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_error_controller_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_assets_images_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../client/assets/images/profile-picture.jpg */ \"./client/assets/images/profile-picture.jpg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n //................................................................\n//the classic index function to list all the docs in the collection\n\nconst index = async (req, res) => {\n  try {\n    const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.find({}).select(\"name email updated created\");\n    res.status(200).json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2___default().getErrorMessage(err)\n    });\n  }\n}; //..........................................................\n//save one doc to the collection\n\n\nconst store = async (req, res) => {\n  let user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default(req.body);\n\n  try {\n    await user.save();\n    return res.status(201).json({\n      message: user\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2___default().getErrorMessage(err)\n    });\n  }\n}; //..........................................................\n//fetch one the doc the id and hook it the request object\n\n\nconst findUserById = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);\n\n    if (!user) {\n      return res.status(400).json({\n        error: \"User Not Found\"\n      });\n    }\n\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(\"400\").json({\n      error: \"Could Not Retrive The Document\"\n    });\n  }\n}; //.................................................................\n//fetch a specific doc by ID\n\n\nconst show = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  res.status(200).json(req.profile);\n}; //.................................................................\n//updating a doc by id\n\n\nconst update = (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_3___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be unloaded\"\n      });\n    }\n\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    try {\n      await user.save();\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    } catch (err) {\n      return res.status(400).json({\n        error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2___default().getErrorMessage(err)\n      });\n    }\n  });\n}; //........................................................................\n//delete a document by ID\n\n\nconst destroy = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__.default.deleteOne(user);\n    deletedUser.salt = undefined;\n    deletedUser.hashed_password = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2___default().getErrorMessage(err)\n    });\n  }\n}; //........................................................................\n//this controller fetchs the user profile picturefrom the data base\n\n\nconst photo = (req, res, next) => {\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n}; //........................................................................\n//here is the controller for the default picture\n\n\nconst defaultImage = (req, res) => {\n  return res.sendFile(process.cwd() + _client_assets_images_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_5__.default);\n};\n\nconst _default = {\n  index,\n  store,\n  show,\n  update,\n  destroy,\n  findUserById,\n  photo,\n  defaultImage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(index, \"index\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(store, \"store\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(findUserById, \"findUserById\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(show, \"show\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(destroy, \"destroy\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(defaultImage, \"defaultImage\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/controllers/user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/home/halladj/projects/js/blog/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIRECTORY = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_7__.default.compile(app); //serve static file config\n\napp.use(\"/dist/\", express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_8___default().join(CURRENT_WORKING_DIRECTORY, \"dist\"))); //decaring some basic middleware\n//express.json()  => is the new body-parser \"that parsers the body of encomong reqs\"\n//express.urlncoded => also used to parse the req body\n//cookieParser => parser and set the cookies in req objects\n//compress => will try to compress res bodies will req passes through middlewares\n//helmet => helps sercuring the app by setting HTTP headers\n//cors => to enabel cross-origin resource shring\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()({\n  contentSecurityPolicy: false\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()()); //MOUNTED THE USERS ROUTES HANDLER HERE\n//NOW THEY CAN BE ACCESSED VAI OUR APPLICATION\n\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_6__.default);\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_5__.default);\napp.get(\"*\", (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_15__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_12__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  console.log(context);\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_9__.default)({\n    markup: markup,\n    css: css\n  }));\n}); //here goes css and markup\n//a catch all error handler for the hasAuthorization function from authController\n\napp.use((err, req, res, next) => {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(\"401\").json({\n      error: err.name + \" :\" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      error: err.name + \": \" + err.message\n    });\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIRECTORY, \"CURRENT_WORKING_DIRECTORY\", \"/home/halladj/projects/js/blog/server/express.js\");\n  reactHotLoader.register(app, \"app\", \"/home/halladj/projects/js/blog/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/express.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst UserSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name id Required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email eddress\"],\n    required: \"Email is required\"\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: Date,\n  hashed_password: {\n    type: String,\n    required: \"Password is Required\"\n  },\n  salt: String,\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  }\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n  console.log(this.hashed_password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return \"error\";\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"error\";\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"password must be at least 6 characters\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"password is required\");\n  }\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/home/halladj/projects/js/blog/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/auth/signin\").post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signin);\nrouter.route(\"auth/signout\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signout);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/halladj/projects/js/blog/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/routes/auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)(); //this part will handel the index and store RESTful acts\n\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.index).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.store); //this part will handel the show, update and destroy RESTful acts\n//authentication and authorization check before deleteing and updating docs\n\nrouter.route(\"/api/users/:userId\").get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.show).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.destroy); //here goes the photo controller to\n//fetch the user profile picture \n//if found otherwise fetch the default one\n\nrouter.route(\"/api/users/photo/:userId\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.photo, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultImage);\nrouter.route(\"api/users/defaultPhoto\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultImage); //mounts the user instence under the name of profile with proper id\n//on the request object << it's basicaly a middleware\n//that is triggered with the :userId params is in use>>\n\nrouter.param(\"userId\", _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.findUserById); //defualt export for ya\n\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/halladj/projects/js/blog/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // setup the database connection and configration\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoURI, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log(`Server started on port ${_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port}`);\n});\n\n//# sourceURL=webpack://blog/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `\n    <html lang=\"eng\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>BLOG</title>\n        <meta name=\"viewport\" content=\"minimum-scale=1, initial-scale=1, width=device-width\"/>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n        <link rel=\"stylesheet\" href=\"/dist/ss.css\">\n        <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n      </head>\n      <body>\n        <div id=\"root\">${markup}</div>\n        <style id=\"jss-server-side\">${css}</style>\n        <script src=\"/dist/bundle.js\" ></script> \n      </body>\n    </html>\n  \n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/halladj/projects/js/blog/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-cheap-module-source-map\",\n  entry: [\"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      \"react-dom\": \"@hot-loader/react-dom\"\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/halladj/projects/js/blog/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/home/halladj/projects/js/blog/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://blog/./webpack.config.client.js?");

/***/ }),

/***/ "./client/assets/images/elmko9qf45731.png":
/*!************************************************!*\
  !*** ./client/assets/images/elmko9qf45731.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"51423f4f2f65ae0a6b78050f11a76cfe.png\");\n\n//# sourceURL=webpack://blog/./client/assets/images/elmko9qf45731.png?");

/***/ }),

/***/ "./client/assets/images/profile-picture.jpg":
/*!**************************************************!*\
  !*** ./client/assets/images/profile-picture.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"95c8ca68eba9b646582216e84ed23d33.jpg\");\n\n//# sourceURL=webpack://blog/./client/assets/images/profile-picture.jpg?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");;

/***/ }),

/***/ "@material-ui/icons/AddPhotoAlternate":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/AddPhotoAlternate" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/AddPhotoAlternate");;

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ArrowForward");;

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Delete");;

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Home");;

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Person");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");;

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/extend");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;