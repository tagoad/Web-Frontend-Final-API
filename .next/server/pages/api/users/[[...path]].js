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
exports.id = "pages/api/users/[[...path]]";
exports.ids = ["pages/api/users/[[...path]]"];
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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./pages/api/users/[[...path]].js":
/*!****************************************!*\
  !*** ./pages/api/users/[[...path]].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_azure_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/azure_tools */ \"(api)/./util/azure_tools.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { fname , lname , dname , email , password  } = JSON.parse(req.body);\n    const azureTools = new _util_azure_tools__WEBPACK_IMPORTED_MODULE_0__.AzureTools(\"WDD330-Final\");\n    const path = req.query.path ? req.query.path : [];\n    if (!email || !password) {\n        res.status(400).json({\n            error: \"This path requires an email and password\"\n        });\n        return;\n    }\n    let user = await (await azureTools.getById(\"users\", email)).pop();\n    switch(req.method){\n        case \"POST\":\n            switch(path[0]){\n                case \"register\":\n                    if (user) {\n                        res.status(400).json({\n                            error: \"User already exists\",\n                            user: user\n                        });\n                        return;\n                    }\n                    if (!fname || !lname || !dname) {\n                        res.status(400).json({\n                            error: \"This path requires a first, last, and display name\",\n                            fname: fname,\n                            lname: lname,\n                            dname: dname\n                        });\n                        return;\n                    }\n                    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email) == false) {\n                        res.status(400).json({\n                            error: \"Email is invalid\",\n                            email: email\n                        });\n                        return;\n                    }\n                    const salt = crypto__WEBPACK_IMPORTED_MODULE_1___default().randomBytes(16).toString(\"hex\");\n                    let newUser = {\n                        id: email,\n                        fName: fname,\n                        lName: lname,\n                        dName: dname,\n                        salt: salt,\n                        hash: crypto__WEBPACK_IMPORTED_MODULE_1___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\")\n                    };\n                    user = await azureTools.create(\"users\", newUser);\n                    res.status(201).json({\n                        itemCreated: user\n                    });\n                    break;\n                case \"login\":\n                    if (!user) {\n                        res.status(400).json({\n                            error: \"User not found\",\n                            email: email\n                        });\n                        return;\n                    }\n                    let hash = crypto__WEBPACK_IMPORTED_MODULE_1___default().pbkdf2Sync(password, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n                    if (hash !== user.hash) {\n                        res.status(401).json({\n                            error: \"Incorrect email/password combo\"\n                        });\n                        return;\n                    }\n                    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                        exp: Math.floor(Date.now() / 1000) + 60 * 60,\n                        data: {\n                            email: user.id,\n                            fname: user.fName,\n                            lname: user.lName\n                        }\n                    }, process.env.JWT_SECRET);\n                    res.status(200).json({\n                        token: token,\n                        user: user.id,\n                        dname: user.dName\n                    });\n                    break;\n                default:\n                    res.status(400).json({\n                        error: \"Users only support /login and /register\"\n                    });\n                    return;\n            }\n        default:\n            res.status(404).json({\n                error: \"User only support Post method\"\n            });\n            return;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFO3dCQUNickIsS0FBSyxFQUFFWSxJQUFJLENBQUNZLEtBQUs7cUJBQ3BCLENBQUM7b0JBQ0YsTUFBSztnQkFDVDtvQkFDSTNCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7d0JBQ2pCQyxLQUFLLEVBQUUseUNBQXlDO3FCQUNuRCxDQUFDO29CQUNGLE9BQU07YUFDYjtRQUNEO1lBQ0lkLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ2pCQyxLQUFLLEVBQUUsK0JBQStCO2FBQ3pDLENBQUM7WUFDRixPQUFNO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGkvLi9wYWdlcy9hcGkvdXNlcnMvW1suLi5wYXRoXV0uanM/OTZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBenVyZVRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvYXp1cmVfdG9vbHNcIlxyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgZm5hbWUsIGxuYW1lLCBkbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG4gICAgY29uc3QgYXp1cmVUb29scyA9IG5ldyBBenVyZVRvb2xzKCdXREQzMzAtRmluYWwnKVxyXG4gICAgY29uc3QgcGF0aCA9IHJlcS5xdWVyeS5wYXRoID8gcmVxLnF1ZXJ5LnBhdGggOiBbXTtcclxuXHJcbiAgICBpZighZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICBlcnJvcjogJ1RoaXMgcGF0aCByZXF1aXJlcyBhbiBlbWFpbCBhbmQgcGFzc3dvcmQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1c2VyID0gYXdhaXQgKGF3YWl0IGF6dXJlVG9vbHMuZ2V0QnlJZCgndXNlcnMnLCBlbWFpbCkpLnBvcCgpXHJcblxyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHN3aXRjaChwYXRoWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgYWxyZWFkeSBleGlzdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZuYW1lIHx8ICFsbmFtZSB8fCAhZG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdUaGlzIHBhdGggcmVxdWlyZXMgYSBmaXJzdCwgbGFzdCwgYW5kIGRpc3BsYXkgbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbmFtZTogZm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmFtZTogbG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmFtZTogZG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdFbWFpbCBpcyBpbnZhbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmTmFtZTogZm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxOYW1lOiBsbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZE5hbWU6IGRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWx0OiBzYWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKS50b1N0cmluZygnaGV4JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IGF3YWl0IGF6dXJlVG9vbHMuY3JlYXRlKCd1c2VycycsIG5ld1VzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ3JlYXRlZDogdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcclxuICAgICAgICAgICAgICAgICAgICBpZighdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdXNlci5zYWx0LCAxMDAwLCA2NCwgJ3NoYTUxMicpLnRvU3RyaW5nKCdoZXgnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhhc2ggIT09IHVzZXIuaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0luY29ycmVjdCBlbWFpbC9wYXNzd29yZCBjb21ibydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApICsgKDYwICogNjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuYW1lOiB1c2VyLmZOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5hbWU6IHVzZXIubE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRuYW1lOiB1c2VyLmROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnVXNlcnMgb25seSBzdXBwb3J0IC9sb2dpbiBhbmQgL3JlZ2lzdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgb25seSBzdXBwb3J0IFBvc3QgbWV0aG9kJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkF6dXJlVG9vbHMiLCJjcnlwdG8iLCJqd3QiLCJyZXEiLCJyZXMiLCJmbmFtZSIsImxuYW1lIiwiZG5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImF6dXJlVG9vbHMiLCJwYXRoIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VyIiwiZ2V0QnlJZCIsInBvcCIsIm1ldGhvZCIsInRlc3QiLCJzYWx0IiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsIm5ld1VzZXIiLCJpZCIsImZOYW1lIiwibE5hbWUiLCJkTmFtZSIsImhhc2giLCJwYmtkZjJTeW5jIiwiY3JlYXRlIiwiaXRlbUNyZWF0ZWQiLCJ0b2tlbiIsInNpZ24iLCJleHAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[[...path]].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[[...path]].js"));
module.exports = __webpack_exports__;

})();