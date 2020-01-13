(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["add-employee-add-employee-module"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.page.html":
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.page.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ios hydrated\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ios title-ios hydrated\">Add Employee</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding ios list-ios list-lines-full list-ios-lines-full hydrated\">\n        <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\n            <ion-item>\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input formControlName=\"employee_name\" type=\"text\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Birthday</ion-label>\n                <ion-input formControlName=\"birthday\" type=\"text\" required>\n                </ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Add Employee</ion-button>\n                </ion-col>\n            </ion-row>\n        </form>\n    </ion-list>\n</ion-content>");

            /***/
        }),

        /***/
        "./src/app/add-employee/add-employee-routing.module.ts":
        /*!*************************************************************!*\
          !*** ./src/app/add-employee/add-employee-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: AddEmployeePageRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AddEmployeePageRoutingModule", function() { return AddEmployeePageRoutingModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */
            var _add_employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./add-employee.page */ "./src/app/add-employee/add-employee.page.ts");




            const routes = [{
                path: '',
                component: _add_employee_page__WEBPACK_IMPORTED_MODULE_3__["AddEmployeePage"]
            }];
            let AddEmployeePageRoutingModule = class AddEmployeePageRoutingModule {};
            AddEmployeePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AddEmployeePageRoutingModule);



            /***/
        }),

        /***/
        "./src/app/add-employee/add-employee.module.ts":
        /*!*****************************************************!*\
          !*** ./src/app/add-employee/add-employee.module.ts ***!
          \*****************************************************/
        /*! exports provided: AddEmployeePageModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function() { return AddEmployeePageModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */
            var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */
            var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./add-employee-routing.module */ "./src/app/add-employee/add-employee-routing.module.ts");
            /* harmony import */
            var _add_employee_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./add-employee.page */ "./src/app/add-employee/add-employee.page.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







            let AddEmployeePageModule = class AddEmployeePageModule {};
            AddEmployeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddEmployeePageRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                    ],
                    declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_5__["AddEmployeePage"]]
                })
            ], AddEmployeePageModule);



            /***/
        }),

        /***/
        "./src/app/add-employee/add-employee.page.scss":
        /*!*****************************************************!*\
          !*** ./src/app/add-employee/add-employee.page.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUucGFnZS5zY3NzIn0= */");

            /***/
        }),

        /***/
        "./src/app/add-employee/add-employee.page.ts":
        /*!***************************************************!*\
          !*** ./src/app/add-employee/add-employee.page.ts ***!
          \***************************************************/
        /*! exports provided: AddEmployeePage */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AddEmployeePage", function() { return AddEmployeePage; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./../shared/employee.service */ "./src/app/shared/employee.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





            let AddEmployeePage = class AddEmployeePage {
                constructor(employeeAPI, router, fb, zone) {
                    this.employeeAPI = employeeAPI;
                    this.router = router;
                    this.fb = fb;
                    this.zone = zone;
                    this.employeeForm = this.fb.group({
                        employee_name: [''],
                        birthday: ['']
                    });
                }
                ngOnInit() {}
                onFormSubmit() {
                    if (!this.employeeForm.valid) {
                        return false;
                    } else {
                        this.employeeAPI.addEmployee(this.employeeForm.value)
                            .subscribe((res) => {
                                this.zone.run(() => {
                                    console.log(res);
                                    this.employeeForm.reset();
                                    this.router.navigate(['/home']);
                                });
                            });
                    }
                }
            };
            AddEmployeePage.ctorParameters = () => [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ];
            AddEmployeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-employee',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./add-employee.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./add-employee.page.scss */ "./src/app/add-employee/add-employee.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
                ])
            ], AddEmployeePage);



            /***/
        })

    }
]);
//# sourceMappingURL=add-employee-add-employee-module-es2015.js.map