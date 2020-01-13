(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["edit-employee-edit-employee-module"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-employee/edit-employee.page.html":
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-employee/edit-employee.page.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ios hydrated\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"ios title-ios hydrated\">Add Employee</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding ios list-ios list-lines-full list-ios-lines-full hydrated\">\n        <form [formGroup]=\"updateEmployeeForm\" (ngSubmit)=\"updateForm()\">\n            <ion-item>\n                <ion-label position=\"floating\">Employee name</ion-label>\n                <ion-input formControlName=\"employee_name\" type=\"text\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\">Birthday</ion-label>\n                <ion-input formControlName=\"birthday\" type=\"text\" required>\n                </ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Updatec Employee</ion-button>\n                </ion-col>\n            </ion-row>\n        </form>\n    </ion-list>\n</ion-content>");

            /***/
        }),

        /***/
        "./src/app/edit-employee/edit-employee-routing.module.ts":
        /*!***************************************************************!*\
          !*** ./src/app/edit-employee/edit-employee-routing.module.ts ***!
          \***************************************************************/
        /*! exports provided: EditEmployeePageRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "EditEmployeePageRoutingModule", function() { return EditEmployeePageRoutingModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */
            var _edit_employee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");




            const routes = [{
                path: '',
                component: _edit_employee_page__WEBPACK_IMPORTED_MODULE_3__["EditEmployeePage"]
            }];
            let EditEmployeePageRoutingModule = class EditEmployeePageRoutingModule {};
            EditEmployeePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], EditEmployeePageRoutingModule);



            /***/
        }),

        /***/
        "./src/app/edit-employee/edit-employee.module.ts":
        /*!*******************************************************!*\
          !*** ./src/app/edit-employee/edit-employee.module.ts ***!
          \*******************************************************/
        /*! exports provided: EditEmployeePageModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "EditEmployeePageModule", function() { return EditEmployeePageModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */
            var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */
            var _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./edit-employee-routing.module */ "./src/app/edit-employee/edit-employee-routing.module.ts");
            /* harmony import */
            var _edit_employee_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./edit-employee.page */ "./src/app/edit-employee/edit-employee.page.ts");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







            let EditEmployeePageModule = class EditEmployeePageModule {};
            EditEmployeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _edit_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditEmployeePageRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                    ],
                    declarations: [_edit_employee_page__WEBPACK_IMPORTED_MODULE_5__["EditEmployeePage"]]
                })
            ], EditEmployeePageModule);



            /***/
        }),

        /***/
        "./src/app/edit-employee/edit-employee.page.scss":
        /*!*******************************************************!*\
          !*** ./src/app/edit-employee/edit-employee.page.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZW1wbG95ZWUvZWRpdC1lbXBsb3llZS5wYWdlLnNjc3MifQ== */");

            /***/
        }),

        /***/
        "./src/app/edit-employee/edit-employee.page.ts":
        /*!*****************************************************!*\
          !*** ./src/app/edit-employee/edit-employee.page.ts ***!
          \*****************************************************/
        /*! exports provided: EditEmployeePage */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "EditEmployeePage", function() { return EditEmployeePage; });
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





            let EditEmployeePage = class EditEmployeePage {
                constructor(employeeAPI, actRoute, router, fb) {
                    this.employeeAPI = employeeAPI;
                    this.actRoute = actRoute;
                    this.router = router;
                    this.fb = fb;
                    this.id = this.actRoute.snapshot.paramMap.get('id');
                }
                ngOnInit() {
                    this.getEmployeeData(this.id);
                    this.updateEmployeeForm = this.fb.group({
                        employee_name: [''],
                        birthday: ['']
                    });
                }
                getEmployeeData(id) {
                    this.employeeAPI.getEmployee(id).subscribe(res => {
                        this.updateEmployeeForm.setValue({
                            employee_name: res['employee_name'],
                            birthday: res['birthday']
                        });
                    });
                }
                updateForm() {
                    if (!this.updateEmployeeForm.valid) {
                        return false;
                    } else {
                        this.employeeAPI.updateEmployee(this.id, this.updateEmployeeForm.value)
                            .subscribe((res) => {
                                console.log(res);
                                this.updateEmployeeForm.reset();
                                this.router.navigate(['/home']);
                            });
                    }
                }
            };
            EditEmployeePage.ctorParameters = () => [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
            ];
            EditEmployeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-employee',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./edit-employee.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-employee/edit-employee.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./edit-employee.page.scss */ "./src/app/edit-employee/edit-employee.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
                ])
            ], EditEmployeePage);



            /***/
        })

    }
]);
//# sourceMappingURL=edit-employee-edit-employee-module-es2015.js.map