"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "@azure/cosmos":
/*!********************************!*\
  !*** external "@azure/cosmos" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@azure/cosmos");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _util_azure_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/azure_tools */ \"(api)/./util/azure_tools.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);\nuuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { fname , lname , email , password  } = req.body;\n    const azureTools = new _util_azure_tools__WEBPACK_IMPORTED_MODULE_1__.AzureTools(\"WDD330-Final\");\n    switch(req.method){\n        case \"GET\":\n            if (!email || !password) {\n                res.status(400).json({\n                    error: \"This path requires an email and password\"\n                });\n                return;\n            }\n            const user = await (await azureTools.getById(\"users\", email)).pop();\n            if (!user) {\n                res.status(400).json({\n                    error: \"User not found\"\n                });\n                return;\n            }\n            res.json(user);\n            break;\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUMrQjtBQUMzQjtBQUNHO0FBRTlCLGlFQUFlLE9BQU9JLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQy9CLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSTtJQUNsRCxNQUFNQyxVQUFVLEdBQUcsSUFBSVYseURBQVUsQ0FBQyxjQUFjLENBQUM7SUFFakQsT0FBUUcsR0FBRyxDQUFDUSxNQUFNO1FBQ2QsS0FBSyxLQUFLO1lBQ04sSUFBRyxDQUFDSixLQUFLLElBQUksQ0FBQ0MsUUFBUSxFQUFFO2dCQUNwQkosR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFDakJDLEtBQUssRUFBRSwwQ0FBMEM7aUJBQ3BELENBQUM7Z0JBQ0YsT0FBTTthQUNUO1lBQ0QsTUFBTUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNTCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxPQUFPLEVBQUVULEtBQUssQ0FBQyxDQUFDLENBQUNVLEdBQUcsRUFBRTtZQUNuRSxJQUFHLENBQUNGLElBQUksRUFBRTtnQkFDTlgsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFDakJDLEtBQUssRUFBRSxnQkFBZ0I7aUJBQzFCLENBQUM7Z0JBQ0YsT0FBTTthQUNUO1lBQ0RWLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDRSxJQUFJLENBQUM7WUFDZCxNQUFLO0tBQ1o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz8xZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnXHJcbmltcG9ydCB7IEF6dXJlVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9henVyZV90b29sc1wiXHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBmbmFtZSwgbG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IGF6dXJlVG9vbHMgPSBuZXcgQXp1cmVUb29scygnV0REMzMwLUZpbmFsJylcclxuXHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICBpZighZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdUaGlzIHBhdGggcmVxdWlyZXMgYW4gZW1haWwgYW5kIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAoYXdhaXQgYXp1cmVUb29scy5nZXRCeUlkKCd1c2VycycsIGVtYWlsKSkucG9wKClcclxuICAgICAgICAgICAgaWYoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHVzZXIpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXVpZCIsIkF6dXJlVG9vbHMiLCJjcnlwdG8iLCJqd3QiLCJyZXEiLCJyZXMiLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJhenVyZVRvb2xzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlciIsImdldEJ5SWQiLCJwb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ }),

/***/ "(api)/./util/azure_tools.js":
/*!*****************************!*\
  !*** ./util/azure_tools.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AzureTools\": () => (/* binding */ AzureTools)\n/* harmony export */ });\n/* harmony import */ var _azure_cosmos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/cosmos */ \"@azure/cosmos\");\n/* harmony import */ var _azure_cosmos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_azure_cosmos__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AzureTools {\n    constructor(database){\n        const endpoint = process.env.COSMOS_ENDPOINT;\n        const key = process.env.COSMOS_KEY;\n        this.client = new _azure_cosmos__WEBPACK_IMPORTED_MODULE_0__.CosmosClient({\n            endpoint,\n            key\n        });\n        this.database = this.client.database(database);\n    }\n    async getAll(container) {\n        const { resources  } = await this.database.container(container).items.readAll().fetchAll();\n        return resources;\n    }\n    async getById(container, id) {\n        const { resources  } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.id = '${id}'`).fetchAll();\n        return resources;\n    }\n    async getByField(container, field, value) {\n        const { resources  } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.${field} = '${value}'`).fetchAll();\n        return resources;\n    }\n    async create(container, item) {\n        const { resource  } = await this.database.container(container).items.upsert(item);\n        return resource;\n    }\n    async deleteById(container, id) {\n        const { resource  } = await this.database.container(container).item(id).delete();\n        return resource;\n    }\n    async deleteByUser(container, user) {\n        const { resources  } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.user = '${user}'`).fetchAll();\n        for(let i = 0; i < resources.length; i++){\n            await this.deleteById(container, resources[i].id);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDa0IsQ0FBQyxDQUFDLENBQUNiLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uL3V0aWwvYXp1cmVfdG9vbHMuanM/NGI2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Ntb3NDbGllbnQgfSBmcm9tIFwiQGF6dXJlL2Nvc21vc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF6dXJlVG9vbHMge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2UpIHtcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52LkNPU01PU19FTkRQT0lOVDtcclxuICAgICAgICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5DT1NNT1NfS0VZO1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IENvc21vc0NsaWVudCh7ZW5kcG9pbnQsIGtleX0pO1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSB0aGlzLmNsaWVudC5kYXRhYmFzZShkYXRhYmFzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHsgcmVzb3VyY2VzIH0gPSBhd2FpdCB0aGlzLmRhdGFiYXNlLmNvbnRhaW5lcihjb250YWluZXIpLml0ZW1zLnJlYWRBbGwoKS5mZXRjaEFsbCgpO1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QnlJZChjb250YWluZXIsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgeyByZXNvdXJjZXMgfSA9IGF3YWl0IHRoaXMuZGF0YWJhc2UuY29udGFpbmVyKGNvbnRhaW5lcikuaXRlbXMucXVlcnkoYFNFTEVDVCAqIEZST00gYyBXSEVSRSBjLmlkID0gJyR7aWR9J2ApLmZldGNoQWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRCeUZpZWxkKGNvbnRhaW5lciwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyByZXNvdXJjZXMgfSA9IGF3YWl0IHRoaXMuZGF0YWJhc2UuY29udGFpbmVyKGNvbnRhaW5lcikuaXRlbXMucXVlcnkoYFNFTEVDVCAqIEZST00gYyBXSEVSRSBjLiR7ZmllbGR9ID0gJyR7dmFsdWV9J2ApLmZldGNoQWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGUoY29udGFpbmVyLCBpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgeyByZXNvdXJjZSB9ID0gYXdhaXQgdGhpcy5kYXRhYmFzZS5jb250YWluZXIoY29udGFpbmVyKS5pdGVtcy51cHNlcnQoaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUJ5SWQoY29udGFpbmVyLCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGF3YWl0IHRoaXMuZGF0YWJhc2UuY29udGFpbmVyKGNvbnRhaW5lcikuaXRlbShpZCkuZGVsZXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUJ5VXNlcihjb250YWluZXIsIHVzZXIpIHtcclxuICAgICAgICBjb25zdCB7IHJlc291cmNlcyB9ID0gYXdhaXQgdGhpcy5kYXRhYmFzZS5jb250YWluZXIoY29udGFpbmVyKS5pdGVtcy5xdWVyeShgU0VMRUNUICogRlJPTSBjIFdIRVJFIGMudXNlciA9ICcke3VzZXJ9J2ApLmZldGNoQWxsKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUJ5SWQoY29udGFpbmVyLCByZXNvdXJjZXNbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDb3Ntb3NDbGllbnQiLCJBenVyZVRvb2xzIiwiY29uc3RydWN0b3IiLCJkYXRhYmFzZSIsImVuZHBvaW50IiwicHJvY2VzcyIsImVudiIsIkNPU01PU19FTkRQT0lOVCIsImtleSIsIkNPU01PU19LRVkiLCJjbGllbnQiLCJnZXRBbGwiLCJjb250YWluZXIiLCJyZXNvdXJjZXMiLCJpdGVtcyIsInJlYWRBbGwiLCJmZXRjaEFsbCIsImdldEJ5SWQiLCJpZCIsInF1ZXJ5IiwiZ2V0QnlGaWVsZCIsImZpZWxkIiwidmFsdWUiLCJjcmVhdGUiLCJpdGVtIiwicmVzb3VyY2UiLCJ1cHNlcnQiLCJkZWxldGVCeUlkIiwiZGVsZXRlIiwiZGVsZXRlQnlVc2VyIiwidXNlciIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/azure_tools.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();