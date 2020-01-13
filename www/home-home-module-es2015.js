(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["home-home-module"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Ionic Music App\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"ios list-ios hydrated\">\n        <ion-list-header class=\"ios hydrated\">\n            Employee List\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let employee of Employees\" class=\"item-label item ios in-list ion-focusable hydrated\">\n            <ion-label class=\"sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated\">\n                <h2>{{employee.employee_name}}</h2>\n                <h3>{{employee.birthday}}</h3>\n            </ion-label>\n\n            <div class=\"item-note\" item-end>\n                <button ion-button clear [routerLink]=\"['/edit-employee/', employee._id]\">\n          <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n                <button ion-button clear (click)=\"deleteEmployee(employee, i)\">\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n            </div>\n        </ion-item>\n    </ion-list>\n\n\n    <!-- fab placed to the bottom start -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-employee\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

            /***/
        }),

        /***/
        "./src/app/home/home.module.ts":
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomePageModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */
            var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */
            var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./home.page */ "./src/app/home/home.page.ts");







            let HomePageModule = class HomePageModule {};
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                            path: '',
                            component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                        }])
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
                })
            ], HomePageModule);



            /***/
        }),

        /***/
        "./src/app/home/home.page.scss":
        /*!*************************************!*\
          !*** ./src/app/home/home.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

            /***/
        }),

        /***/
        "./src/app/home/home.page.ts":
        /*!***********************************!*\
          !*** ./src/app/home/home.page.ts ***!
          \***********************************/
        /*! exports provided: HomePage */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */
            var _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./../shared/employee.service */ "./src/app/shared/employee.service.ts");



            let HomePage = class HomePage {
                constructor(employeeService) {
                    this.employeeService = employeeService;
                    this.Employees = [];
                }
                ngOnInit() {}
                ionViewDidEnter() {
                    this.employeeService.getEmployeeList().subscribe((res) => {
                        console.log(res);
                        this.Employees = res;
                    });
                }
                deleteEmployee(employee, i) {
                    if (window.confirm('Do you want to delete user?')) {
                        this.employeeService.deleteEmployee(employee._id)
                            .subscribe(() => {
                                this.Employees.splice(i, 1);
                                console.log('Employee deleted!');
                            });
                    }
                }
            };
            HomePage.ctorParameters = () => [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
            ];
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
            ], HomePage);



            /***/
        })

    }
]);
//# sourceMappingURL=home-home-module-es2015.js.map