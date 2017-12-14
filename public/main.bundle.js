webpackJsonp([1,5],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (items, criteria) {
        var _this = this;
        return items.filter(function (item) {
            return (item.title.toLowerCase().includes(criteria.toLowerCase())) || (_this.containsAuthor(item.author, criteria.toLowerCase()));
        });
    };
    SearchFilter.prototype.containsAuthor = function (authors, authorCriteria) {
        var found = false;
        authors.forEach(function (author) {
            found = author.toLowerCase().includes(authorCriteria);
        });
        return found;
    };
    SearchFilter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'searchFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFilter);
    return SearchFilter;
}());
var AllBooksComponent = (function () {
    function AllBooksComponent(globalEventsManager, bookService) {
        this.globalEventsManager = globalEventsManager;
        this.bookService = bookService;
        this.filterAllActive = true;
        this.filterIssuedActive = false;
    }
    AllBooksComponent.prototype.ngOnInit = function () {
        this.books = this.bookService.getAllBooksAdmin();
    };
    AllBooksComponent.prototype.onAddBookClicked = function () {
        this.globalEventsManager.addBookClicked(true);
    };
    AllBooksComponent.prototype.onIssuedFilter = function () {
        this.books = this.books.filter(function (book) {
            return book.issuedBy.length > 0;
        });
        this.filterAllActive = false;
        this.filterIssuedActive = true;
    };
    AllBooksComponent.prototype.onAllFilter = function () {
        this.books = this.bookService.getAllBooksAdmin();
        this.filterAllActive = true;
        this.filterIssuedActive = false;
    };
    AllBooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-all-books',
            template: __webpack_require__(738),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_books_service__["a" /* BooksService */]) === 'function' && _b) || Object])
    ], AllBooksComponent);
    return AllBooksComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/all-books.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.getCurrentUser()) {
            return true;
        }
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/auth.guard.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchFilter = (function () {
    function SearchFilter() {
    }
    SearchFilter.prototype.transform = function (items, criteria) {
        var _this = this;
        return items.filter(function (item) {
            return (item.title.toLowerCase().includes(criteria.toLowerCase())) || (_this.containsAuthor(item.authors, criteria.toLowerCase()));
        });
    };
    SearchFilter.prototype.containsAuthor = function (authors, authorCriteria) {
        var found = false;
        authors.forEach(function (author) {
            found = author.toLowerCase().includes(authorCriteria);
        });
        return found;
    };
    SearchFilter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'searchFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFilter);
    return SearchFilter;
}());
var AllBooksComponent = (function () {
    function AllBooksComponent(route, booksService, authenticationService) {
        this.route = route;
        this.booksService = booksService;
        this.authenticationService = authenticationService;
    }
    AllBooksComponent.prototype.ngOnInit = function () {
        this.allBooks = this.booksService.getAllBooks(this.authenticationService.getCurrentUser().id);
        this.allBooks = this.allBooks.filter(function (book) {
            return book.status !== 'ISSUED' && book.status !== 'EXPIRED';
        });
    };
    AllBooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-all-books',
            template: __webpack_require__(742),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_books_service__["a" /* BooksService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], AllBooksComponent);
    return AllBooksComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/all-books.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = (function () {
    function AddBookComponent(fb, bookService) {
        this.fb = fb;
        this.bookService = bookService;
        this.validationMessages = {
            required: 'This field is required',
            pattern: 'This field is invalid'
        };
        this.searchISBNFailed = false;
    }
    AddBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookForm = this.fb.group({
            isbn: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            copies: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            imageUrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            authors: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        var isbnControl = this.bookForm.get('isbn');
        isbnControl.valueChanges.debounceTime(2000).subscribe(function (value) {
            _this.setMessage(isbnControl);
        });
    };
    AddBookComponent.prototype.onSubmit = function (book) {
        this.bookService.addNewBook(book);
        alert("Book added successfully");
        this.bookForm.reset();
    };
    AddBookComponent.prototype.onImageOpenClick = function () {
        var imageUrl = this.bookForm.get('imageUrl').value;
        window.open(imageUrl, '_blank');
    };
    AddBookComponent.prototype.onSearchISBNClicked = function () {
        var _this = this;
        this.bookForm.disable();
        this.searchingBookDetails = true;
        this.bookService.searchBookByISBN(this.bookForm.get('isbn').value).subscribe(function (bookDetail) {
            if (bookDetail) {
                _this.bookForm.patchValue({
                    title: bookDetail.title,
                    imageUrl: bookDetail.thumbnailUrl,
                    description: bookDetail.description,
                    authors: bookDetail.authors
                });
            }
            else {
                _this.searchISBNFailed = true;
            }
            _this.bookForm.enable();
        });
    };
    AddBookComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.isbnValidationMessage = '';
        this.searchISBNFailed = false;
        if ((c.touched || c.dirty) && c.errors) {
            this.isbnValidationMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    AddBookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-add-book',
            template: __webpack_require__(736),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_books_service__["a" /* BooksService */]) === 'function' && _b) || Object])
    ], AddBookComponent);
    return AddBookComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/add-book.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(globalEventsManager, router) {
        var _this = this;
        this.globalEventsManager = globalEventsManager;
        this.router = router;
        this.allBooksBoxVisible = true;
        this.allUsersBoxVisible = false;
        this.globalEventsManager.addBookClickedEmitter.subscribe(function (mode) {
            if (mode) {
                _this.onAddBookClicked();
            }
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onAddBookClicked = function () {
        this.router.navigateByUrl('/admin/books/add-book');
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-admin',
            template: __webpack_require__(737),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/admin.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_users_service__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUsersComponent = (function () {
    function AllUsersComponent(usersService) {
        this.usersService = usersService;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        this.users = this.usersService.getAllUsersAdmin();
        console.log(this.users);
    };
    AllUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-all-users',
            template: __webpack_require__(739),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], AllUsersComponent);
    return AllUsersComponent;
    var _a;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/all-users.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookResponse; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());
var IssuedBy = (function () {
    function IssuedBy() {
    }
    return IssuedBy;
}());
var BookResponse = (function () {
    function BookResponse() {
    }
    return BookResponse;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/book.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersService = (function () {
    function UsersService() {
        var usersData = __webpack_require__(716);
        console.log(usersData);
        if (!JSON.parse(localStorage.getItem('users'))) {
            localStorage.setItem('users', JSON.stringify(usersData));
        }
    }
    UsersService.prototype.getAllUsersAdmin = function () {
        return JSON.parse(localStorage.getItem('users'));
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/users.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_books_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailsComponent = (function () {
    function BookDetailsComponent(activatedRoute, router, bookService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bookService = bookService;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.bookId = params['bookid'];
        });
        this.book = this.bookService.getBookByISBN(this.bookId) || null;
    };
    BookDetailsComponent.prototype.onIssueClick = function () {
        this.bookService.issueBookByISBN(this.bookId);
        this.router.navigateByUrl("/reader/books");
    };
    BookDetailsComponent.prototype.onReturnClicked = function () {
        this.bookService.returnBookByISBN(this.bookId);
        this.router.navigateByUrl("/reader/books");
    };
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-book-details',
            template: __webpack_require__(743),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_books_service__["a" /* BooksService */]) === 'function' && _c) || Object])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/book-details.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuedbooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuedbooksComponent = (function () {
    function IssuedbooksComponent(booksService, authenticationService) {
        this.booksService = booksService;
        this.authenticationService = authenticationService;
    }
    IssuedbooksComponent.prototype.ngOnInit = function () {
        this.allBooks = this.booksService.getAllBooks(this.authenticationService.getCurrentUser().id);
        this.issuedBooks = this.allBooks.filter(function (book) {
            return book.status === 'ISSUED' || book.status === 'EXPIRED';
        });
    };
    IssuedbooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-issuedbooks',
            template: __webpack_require__(745),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_books_service__["a" /* BooksService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], IssuedbooksComponent);
    return IssuedbooksComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/issuedbooks.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReaderComponent = (function () {
    function ReaderComponent(globalEventsManager, router) {
        var _this = this;
        this.globalEventsManager = globalEventsManager;
        this.router = router;
        this.globalEventsManager.viewBookDetailsClickedEmitter.subscribe(function (isbnValue) {
            if (isbnValue) {
                _this.router.navigateByUrl("/reader/books/" + isbnValue);
            }
        });
    }
    ReaderComponent.prototype.ngOnInit = function () {
    };
    ReaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-reader',
            template: __webpack_require__(746),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ReaderComponent);
    return ReaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/reader.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(facebookService, route, router, authenticationService, globalEventsManager) {
        this.facebookService = facebookService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.globalEventsManager = globalEventsManager;
        this.user = {};
        this.loading = false;
        var initParams = {
            appId: '156345135099824',
            xfbml: true,
            version: 'v2.11'
        };
        facebookService.init(initParams);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.logout();
        this.loginOptions = {
            scope: 'public_profile,email,pages_messaging',
            return_scopes: true,
            enable_profile_selector: true
        };
        this.facebookService.getLoginStatus().then(function (loginStatus) {
            if (loginStatus.status === 'connected') {
                _this.facebookService.api('/me?fields=id,name,picture').then(function (response) {
                    _this.user.fb_id = response.id;
                    _this.user.name = response.name;
                    _this.user.imageUrl = response.picture.data.url;
                    _this.authenticationService.login(_this.user).then(function (result) {
                        if (result) {
                            _this.returnUrl = _this.route.snapshot.queryParams['returnUrl'] || '/';
                        }
                        _this.globalEventsManager.showNavBar(true);
                        _this.router.navigateByUrl(_this.returnUrl);
                    });
                });
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.facebookService.login(this.loginOptions).then(function (loginResponse) {
            console.log('loginResponse', loginResponse);
            if (loginResponse.status === 'connected') {
                _this.facebookService.api('/me?fields=id,name,picture').then(function (response) {
                    _this.user.fb_id = response.id;
                    _this.user.name = response.name;
                    _this.user.imageUrl = response.picture.data.url;
                    _this.authenticationService.login(_this.user).then(function (result) {
                        if (result) {
                            _this.returnUrl = _this.route.snapshot.queryParams['returnUrl'] || '/';
                        }
                        _this.globalEventsManager.showNavBar(true);
                        _this.router.navigateByUrl(_this.returnUrl);
                    });
                });
            }
            else {
                console.log('Can not log you in');
            }
        }).catch(function (err) {
            console.log('Error: Not able to log you in.');
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-login',
            template: __webpack_require__(749),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/login.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 423;


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(549);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/main.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_users_all_users_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', redirectTo: 'books', pathMatch: 'full' },
            { path: 'books', component: __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__["a" /* AllBooksComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__all_users_all_users_component__["a" /* AllUsersComponent */] },
            { path: 'books/add-book', component: __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__["a" /* AddBookComponent */] }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/admin-routing.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_books_all_books_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_users_all_users_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_book_add_book_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__all_books_all_books_component__["a" /* AllBooksComponent */], __WEBPACK_IMPORTED_MODULE_5__all_books_all_books_component__["b" /* SearchFilter */], __WEBPACK_IMPORTED_MODULE_6__all_users_all_users_component__["a" /* AllUsersComponent */], __WEBPACK_IMPORTED_MODULE_7__add_book_add_book_component__["a" /* AddBookComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/admin.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_login_component__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: 'reader', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__shared_login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'reader' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/app-routing.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-root',
            template: __webpack_require__(740),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/app.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_header_header_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reader_reader_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_header_header_profile_toolbar_header_profile_toolbar_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_login_login_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_guard_auth_guard__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_books_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_users_service__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_header_header_profile_toolbar_header_profile_toolbar_component__["a" /* HeaderProfileToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__reader_reader_module__["a" /* ReaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__core_guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__core_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_14__core_global_events_manager_service__["a" /* GlobalEventsManager */], __WEBPACK_IMPORTED_MODULE_15__core_books_service__["a" /* BooksService */], __WEBPACK_IMPORTED_MODULE_16__core_users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/app.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_book__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookThumbnailComponent = (function () {
    function BookThumbnailComponent(globalEventsManager) {
        this.globalEventsManager = globalEventsManager;
    }
    BookThumbnailComponent.prototype.onViewBookClicked = function (isbn) {
        this.globalEventsManager.viewBookDetailsClicked(isbn);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_book__["b" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_book__["b" /* Book */]) === 'function' && _a) || Object)
    ], BookThumbnailComponent.prototype, "book", void 0);
    BookThumbnailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-book-thumbnail',
            template: __webpack_require__(741),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _b) || Object])
    ], BookThumbnailComponent);
    return BookThumbnailComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/book-thumbnail.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(booksService) {
        this.booksService = booksService;
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.onReturnClicked = function (isbn) {
        this.booksService.returnBookByISBN(isbn);
        this.actionSuccess = true;
    };
    BookListComponent.prototype.onRenewClicked = function (isbn) {
        this.booksService.renewBookByISBN(isbn);
        this.actionSuccess = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BookListComponent.prototype, "book", void 0);
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-book-list',
            template: __webpack_require__(744),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_books_service__["a" /* BooksService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_books_service__["a" /* BooksService */]) === 'function' && _a) || Object])
    ], BookListComponent);
    return BookListComponent;
    var _a;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/book-list.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reader_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__issuedbooks_issuedbooks_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_books_book_details_book_details_component__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    {
        path: 'reader', component: __WEBPACK_IMPORTED_MODULE_2__reader_component__["a" /* ReaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', redirectTo: 'books', pathMatch: 'full' },
            { path: 'books', component: __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__["a" /* AllBooksComponent */] },
            { path: 'books/:bookid', component: __WEBPACK_IMPORTED_MODULE_6__all_books_book_details_book_details_component__["a" /* BookDetailsComponent */] },
            { path: 'issued-books', component: __WEBPACK_IMPORTED_MODULE_5__issuedbooks_issuedbooks_component__["a" /* IssuedbooksComponent */] }
        ]
    }
];
var ReaderRoutingModule = (function () {
    function ReaderRoutingModule() {
    }
    ReaderRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ReaderRoutingModule);
    return ReaderRoutingModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/reader-routing.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reader_routing_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reader_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_Books_book_thumbnail_book_thumbnail_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__issuedbooks_issuedbooks_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issuedbooks_book_list_book_list_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__all_books_book_details_book_details_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_books_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReaderModule = (function () {
    function ReaderModule() {
    }
    ReaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__reader_routing_module__["a" /* ReaderRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__reader_component__["a" /* ReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__["a" /* AllBooksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__all_Books_book_thumbnail_book_thumbnail_component__["a" /* BookThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__issuedbooks_issuedbooks_component__["a" /* IssuedbooksComponent */],
                __WEBPACK_IMPORTED_MODULE_4__all_books_all_books_component__["b" /* SearchFilter */],
                __WEBPACK_IMPORTED_MODULE_7__issuedbooks_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__all_books_book_details_book_details_component__["a" /* BookDetailsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__core_books_service__["a" /* BooksService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ReaderModule);
    return ReaderModule;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/reader.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderProfileToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderProfileToolbarComponent = (function () {
    function HeaderProfileToolbarComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.settingDisabled = true;
    }
    HeaderProfileToolbarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getCurrentUser();
        if (this.authenticationService.isAdmin(this.currentUser)) {
            this.adminLinkVisible = true;
        }
    };
    HeaderProfileToolbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        window.location.replace('/');
    };
    HeaderProfileToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-header-profile-toolbar',
            template: __webpack_require__(747),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HeaderProfileToolbarComponent);
    return HeaderProfileToolbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/header-profile-toolbar.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_global_events_manager_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, route, globalEventsManager) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.route = route;
        this.globalEventsManager = globalEventsManager;
        this.shouldVisible = false;
        this.globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
            _this.shouldVisible = mode;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getCurrentUser();
        if (this.currentUser) {
            this.shouldVisible = true;
        }
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'atl-header',
            template: __webpack_require__(748),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_global_events_manager_service__["a" /* GlobalEventsManager */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_global_events_manager_service__["a" /* GlobalEventsManager */]) === 'function' && _c) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/header.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.getCurrentUser = function () {
        this.currentUser = localStorage.getItem('currentUser');
        return JSON.parse(this.currentUser);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            user.id = user.fb_id;
            delete user['fb_id'];
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUser = localStorage.getItem('currentUser');
            resolve(true);
        });
    };
    AuthenticationService.prototype.isAdmin = function (user) {
        return new Promise(function (resolve, reject) {
            /** Uncomment this and add fb id here to see the admin functionalities */
            // if (user.fb_id === '357209454725001') {
            //   resolve(true);
            // }
            resolve(true);
        });
    };
    ;
    AuthenticationService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationService);
    return AuthenticationService;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/authentication.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksService = (function () {
    // googleBookAPIUrl  = 'http://maps.googleapis.com/maps/api/distancematrix/json?origins=12.918218,%2077.500537&destinations=13.199789,%2077.707277&mode=driving';
    function BooksService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';
        var bookData = __webpack_require__(715);
        /** Can not use http get as  */
        // this.http.get('./assets/books.json').subscribe(res => {
        //   let books = res.json();
        //   localStorage.setItem('books', JSON.stringify(books));
        //   console.log(`Loading books from file completed. Total ${books.length} found.`);
        // });
        if (!JSON.parse(localStorage.getItem('books'))) {
            localStorage.setItem('books', JSON.stringify(bookData));
        }
    }
    BooksService.prototype.searchBookByISBN = function (isbn) {
        var query = 'isbn:' + isbn;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('q', query);
        return this.http.get(this.googleBookAPIUrl, { search: params }).map(function (response) {
            var bookResponse = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* BookResponse */]();
            response = response.json();
            if (response.totalItems !== 0) {
                bookResponse.title = response.items[0].volumeInfo.title;
                bookResponse.authors = response.items[0].volumeInfo.authors;
                bookResponse.thumbnailUrl = response.items[0].volumeInfo.imageLinks.thumbnail;
                bookResponse.description = response.items[0].volumeInfo.description;
            }
            else {
                bookResponse = null;
            }
            return bookResponse;
        });
    };
    BooksService.prototype.getAllBooks = function (userId) {
        var books = JSON.parse(localStorage.getItem('books'));
        var bookList = [];
        books.forEach(function (book) {
            var newBook;
            newBook = {};
            newBook.authors = book.author;
            newBook.title = book.title;
            newBook.imageUrl = book.imageUrl;
            newBook.isbn = book.isbn;
            newBook.category = book.category;
            newBook.location = book.location;
            newBook.description = book.description;
            if (book.issuedBy.length > 0) {
                book.issuedBy.forEach(function (issuedStatus) {
                    if (issuedStatus.issuedBy === userId) {
                        if (Number.parseFloat(issuedStatus.returnDue) < new Date().getTime()) {
                            newBook.status = 'EXPIRED';
                            newBook.dueOn = new Date(Number.parseFloat(issuedStatus.returnDue));
                        }
                        else {
                            newBook.status = 'ISSUED';
                            newBook.dueOn = new Date(Number.parseFloat(issuedStatus.returnDue));
                        }
                    }
                    else {
                        if (book.issuedBy.length === Number.parseInt(book.copies)) {
                            newBook.status = 'NOT_AVAILABLE';
                        }
                        else {
                            newBook.status = 'AVAILABLE';
                        }
                    }
                });
            }
            else {
                newBook.status = 'AVAILABLE';
            }
            bookList.push(newBook);
        });
        return bookList;
    };
    BooksService.prototype.getAllBooksAdmin = function () {
        return JSON.parse(localStorage.getItem('books'));
    };
    BooksService.prototype.getBookByISBN = function (isbn) {
        var userId = this.authenticationService.getCurrentUser().id;
        var bookList = this.getAllBooks(userId);
        return bookList.filter(function (book) {
            return book.isbn === isbn;
        })[0];
    };
    BooksService.prototype.issueBookByISBN = function (isbn) {
        var userId = this.authenticationService.getCurrentUser().id;
        var books = JSON.parse(localStorage.getItem('books'));
        books.forEach(function (book) {
            if (book.isbn === isbn) {
                book.issuedBy.push({
                    issuedBy: userId,
                    issuedOn: (new Date().getTime()).toString(),
                    returnDue: (new Date().getTime() + 604800000).toString()
                });
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    };
    BooksService.prototype.returnBookByISBN = function (isbn) {
        var userId = this.authenticationService.getCurrentUser().id;
        var books = JSON.parse(localStorage.getItem('books'));
        books.forEach(function (book) {
            if (book.isbn === isbn) {
                book.issuedBy = book.issuedBy.filter(function (issuedStatus) {
                    return issuedStatus.issuedBy !== userId;
                });
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    };
    BooksService.prototype.renewBookByISBN = function (isbn) {
        var userId = this.authenticationService.getCurrentUser().id;
        var books = JSON.parse(localStorage.getItem('books'));
        books.forEach(function (book) {
            if (book.isbn === isbn) {
                book.issuedBy.forEach(function (issuedStatus) {
                    if (issuedStatus.issuedBy === userId) {
                        issuedStatus.returnDue = (new Date().getTime() + 604800000).toString();
                    }
                });
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    };
    BooksService.prototype.addNewBook = function (book) {
        var books = JSON.parse(localStorage.getItem('books'));
        book.id = book.isbn;
        book.issuedBy = [];
        book.author = [book.authors];
        delete book.authors;
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };
    BooksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], BooksService);
    return BooksService;
    var _a, _b;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/books.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventsManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalEventsManager = (function () {
    function GlobalEventsManager() {
        this._showNavBar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.showNavBarEmitter = this._showNavBar.asObservable();
        this._addBookClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.addBookClickedEmitter = this._addBookClicked.asObservable();
        this._viewBookDetailsClicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.viewBookDetailsClickedEmitter = this._viewBookDetailsClicked.asObservable();
    }
    GlobalEventsManager.prototype.showNavBar = function (ifShow) {
        this._showNavBar.next(ifShow);
    };
    GlobalEventsManager.prototype.addBookClicked = function (ifClicked) {
        this._addBookClicked.next(ifClicked);
    };
    GlobalEventsManager.prototype.viewBookDetailsClicked = function (isbnValue) {
        this._viewBookDetailsClicked.next(isbnValue);
    };
    GlobalEventsManager = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GlobalEventsManager);
    return GlobalEventsManager;
}());
//# sourceMappingURL=D:/yorbit/angular-2/project-code-v2/any-time-library/src/global-events-manager.service.js.map

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = [{"id":"1512404409101","isbn":"9781593275846","title":"Eloquent JavaScript, Second Edition","category":"Technology","issuedBy":[{"issuedBy":"357209454725001","issuedOn":"1512977062566","returnDue":"1513581862566"}],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","author":["Marijn Haverbeke"],"description":"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."},{"id":"1512404409102","isbn":"9781449331818","title":"Learning JavaScript Design Patterns","category":"Technology","issuedBy":[{"issuedBy":"357209454725001","issuedOn":"1512977062566","returnDue":"1513581862566"}],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=JYPEgK-1bZoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","author":["Addy Osmani"],"description":"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."},{"id":"1512404409103","isbn":"9781449365035","title":"Speaking JavaScript","category":"Technology","issuedBy":[{"issuedBy":"357209454725001","issuedOn":"1512977062500","returnDue":"1512977062566"}],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=wCYtngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","author":["Axel Rauschmayer"],"description":"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position."},{"id":"1512404409104","isbn":"9781491950296","title":"Programming JavaScript Applications","category":"Technology","issuedBy":[{"issuedBy":"357209454725002","issuedOn":"1512977062500","returnDue":"1512977062566"},{"issuedBy":"357209454725003","issuedOn":"1512977062500","returnDue":"1512977062566"},{"issuedBy":"357209454725005","issuedOn":"1512977062500","returnDue":"1512977062566"},{"issuedBy":"357209454725006","issuedOn":"1512977062500","returnDue":"1512977062566"},{"issuedBy":"357209454725007","issuedOn":"1512977062500","returnDue":"1512977062566"}],"location":"s01r01c01","copies":"5","imageUrl":"http://via.placeholder.com/128X169","author":["Eric Elliott"],"description":"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows."},{"id":"1512404409105","isbn":"9781593277574","title":"Understanding ECMAScript 6","category":"Technology","issuedBy":[],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=6Ze7DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","author":["Nicholas C. Zakas"],"description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript."},{"id":"1512404409106","isbn":"9781491904244","title":"You Don't Know JS","issuedBy":[],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=N8HyjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","author":["Kyle Simpson"],"description":"No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the  You Don’ t Know JS  series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built."},{"id":"1512404409107","isbn":"9781449325862","title":"Git Pocket Guide","category":"Technology","issuedBy":[],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=z9JVlgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","author":["Richard E. Silverman"],"description":"This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience."},{"id":"1512404409108","isbn":"9781449337711","title":"Designing Evolvable Web APIs with ASP.NET","category":"Technology","issuedBy":[],"location":"s01r01c01","copies":"5","imageUrl":"http://books.google.com/books/content?id=mojJMgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","author":["Glenn Block, et al."],"description":"Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API."}]

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = [{"name":"Ajit Singh","imageUrl":"https://scontent.xx.fbcdn.net/v/t1.0-1/p80x80/13880254_123944364718179_153254340995456738_n.jpg?oh=56d01f17d448fa0c4a96f9fcad45eefa&oe=5AD08C93","id":"357209454725001"},{"name":"Sample User 1","imageUrl":"http://via.placeholder.com/80X80","id":"357209454725002"},{"name":"Sample User 2","imageUrl":"http://via.placeholder.com/80X80","id":"357209454725003"},{"name":"Sample User 3","imageUrl":"http://via.placeholder.com/80X80","id":"357209454725004"},{"name":"Sample User 4","imageUrl":"http://via.placeholder.com/80X80","id":"357209454725005"}]

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ".form-box {\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = ".imageBox {\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.detailBox {\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.book-title {\r\n    color: #242424;\r\n    font-size: large;\r\n}\r\n\r\n.book-author {\r\n    color: dodgerblue;\r\n    font-style: italic;\r\n    font-size: small;\r\n}\r\n\r\n.book-list {\r\n    padding: 5px 2px;\r\n    border-bottom: 1px rgb(105, 100, 100) solid;\r\n    margin: 0px !important;\r\n}\r\n\r\n.book-isbn {\r\n    border: 1px solid;\r\n    padding: 5px;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ".imageBox {\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.detailBox {\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.user-title {\r\n    color: #242424;\r\n    font-size: large;\r\n}\r\n\r\n.users-list {\r\n    padding: 5px 2px;\r\n    border-bottom: 1px rgb(105, 100, 100) solid;\r\n    margin: 0px !important;\r\n}"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ".book-title {\r\n    color: #242424;\r\n}\r\n\r\n.book-author {\r\n    color: dodgerblue;\r\n    font-style: italic;\r\n    font-size: small;\r\n}\r\n\r\n.view-button {\r\n    width: 100%;\r\n}\r\n\r\n.caption {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ".row.equal {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    height: 100%;\r\n    margin: 10px 10px;\r\n}\r\n\r\n.thumbnailCard {\r\n    height: 100% !important;\r\n}\r\n\r\n.searchBox {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ".back-button {\r\n    font-size: small;\r\n}\r\n\r\n.bookCover {\r\n    margin: 0 auto;\r\n}\r\n\r\n.bookCoverBox {\r\n    padding: 20px;\r\n}\r\n\r\n.bookDetailBox {\r\n    padding: 20px;\r\n    margin: 10px 0;\r\n    display: block;\r\n}\r\n\r\n.book-title {\r\n    font-size: x-large;\r\n    margin: 10px 0;\r\n    display: block;\r\n}\r\n\r\n.book-authors {\r\n    color: dodgerblue;\r\n    font-style: italic;\r\n    font-size: small;\r\n    margin: 10px 0;\r\n    display: block;\r\n}\r\n\r\n.book-category {\r\n    font-size: large;\r\n    margin: 10px 0;\r\n    display: block;\r\n}\r\n\r\n.book-location {\r\n    font-size: large;\r\n    margin: 10px 0;\r\n    display: block;\r\n}\r\n\r\n.book-description {\r\n    margin: 10px 0;\r\n    display: block;\r\n}"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ".imageBox {\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.detailBox {\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.book-title {\r\n    color: #242424;\r\n    font-size: large;\r\n}\r\n\r\n.book-author {\r\n    color: dodgerblue;\r\n    font-style: italic;\r\n    font-size: small;\r\n}"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ".book-list {\r\n    padding: 5px 2px;\r\n    border-bottom: 1px rgb(105, 100, 100) solid;\r\n    margin: 0px !important;\r\n}"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ".profile-box:hover {\r\n    border: 2px white solid;\r\n}\r\n\r\n.profile-image-header {\r\n    border-radius: 18px !important;\r\n    border: 1px;\r\n    height: 20px;\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "/*\r\n/* Created by Filipe Pina\r\n * Specific styles of signin, register, component\r\n */\r\n\r\n\r\n/*\r\n * General styles\r\n */\r\n\r\nbody,\r\nhtml {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.main {\r\n    margin-top: 70px;\r\n}\r\n\r\nh1.title {\r\n    font-size: 50px;\r\n    font-weight: 400;\r\n}\r\n\r\nhr {\r\n    /* width: 10%; */\r\n    color: #fff;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 15px;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 15px;\r\n}\r\n\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n\r\n.main-login {\r\n    background-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main-center {\r\n    margin-top: 30px;\r\n    margin: 0 auto;\r\n    max-width: 330px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.login-button {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n\r\n.login-register {\r\n    font-size: 11px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Add a new book</h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"col-md-6 col-md-offset-3 form-box\">\n                <form class=\"form-horizontal\" novalidate (ngSubmit)=\"onSubmit(bookForm.value)\" [formGroup]=\"bookForm\">\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">ISBN</label>\n                        <div class=\"col-sm-10\" [ngClass]=\"{'has-error':isbnValidationMessage,'has-warning':searchISBNFailed}\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search book details online\" formControlName=\"isbn\">\n                                <span class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"button\" (click)=\"onSearchISBNClicked()\" [disabled]=\"bookForm.get('isbn').errors\"><span class=\"glyphicon glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n                                </span>\n                            </div>\n                            <span class=\"help-block\" *ngIf=\"isbnValidationMessage\">{{isbnValidationMessage}}</span>\n                            <span class=\"help-block\" *ngIf=\"searchISBNFailed\">Not able to find book details online, please go ahead and fill up the detials</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"tilte\" class=\"col-sm-2 control-label\">Book Title</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Book Title\" formControlName=\"title\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"category\" class=\"col-sm-2 control-label\">Category</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"category\" placeholder=\"category\" formControlName=\"category\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"location\" class=\"col-sm-2 control-label\">Location</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Location of the book (shelf,row,column)\" formControlName=\"location\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"copies\" class=\"col-sm-2 control-label\">Copies</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"copies\" placeholder=\"Total number of copies\" formControlName=\"copies\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"thumbUrl\" class=\"col-sm-2 control-label\">Thumbnail</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"thumbUrl\" placeholder=\"Thumbnail URL\" formControlName=\"imageUrl\">\n                                <span class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"button\"  (click)=\"onImageOpenClick()\"><span class=\"glyphicon glyphicon glyphicon-picture\" aria-hidden=\"true\"></span></button>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"authors\" class=\"col-sm-2 control-label\">Authors</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"authors\" placeholder=\"Book Title\" formControlName=\"authors\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"tilte\" class=\"col-sm-2 control-label\">Description</label>\n                        <div class=\"col-sm-10\">\n                            <textarea class=\"form-control col-sm-12\" rows=\"3\" wrap=\"hard\" formControlName=\"description\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!bookForm.valid\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div class=\"readerBody\" (addBookClicked)=\"onAddBookClicked($event)\">\n    <ul class=\"nav nav-tabs\">\n        <!-- <li role=\"presentation\" [class.active]=\"allBooksBoxVisible\" class=\"active\"><a (click)=\"showAllBooksBox()\">All Books</a></li>\n        <li role=\"presentation\" [class.active]=\"issuedBooksBoxVisble\"><a (click)=\"showIssuedBooksBox()\">Issued Books</a></li> -->\n\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a routerLink=\"/admin/books\">All Books</a></li>\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a routerLink=\"/admin/users\">All Users</a></li>\n    </ul>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n            <form class=\"navbar-form navbar-left\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #search (keyup)=\"0\">\n            </form>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Filter By <span class=\"glyphicon glyphicon-filter\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a (click)=\"onAllFilter()\">All <span class=\"glyphicon glyphicon-ok text-success\" aria-hidden=\"true\" *ngIf=\"filterAllActive\"></span></a>\n                        </li>\n                        <li>\n                            <a (click)=\"onIssuedFilter()\">Issued <span class=\"glyphicon glyphicon-ok text-success\" aria-hidden=\"true\" *ngIf=\"filterIssuedActive\"></span></a>\n                        </li>\n                    </ul>\n                </li>\n                <li><button class=\"btn btn-default navbar-btn\" (click)=\"onAddBookClicked()\">Add Book</button></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<ul class=\"list-group\">\n    <div class=\"row book-list\" *ngFor=\"let book of ( books | searchFilter: search.value)\">\n        <div class=\"col-md-1 col-sm-6 imageBox\">\n            <img class=\"coverImage\" [src]=\"book.imageUrl\" />\n        </div>\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10 col-sm-6 detailBox\">\n            <div class=\"book-isbn\">ISBN: {{book.isbn}}</div><br><br>\n            <span class=\"book-title\">{{book.title}}</span><br>\n            <span class=\"book-author\">{{book.author}}</span><br><br>\n            <span class=\"book-copies\">Number of copies: {{book.copies}}</span><br>\n            <span class=\"book-copies-issued\">Copies Issued: {{book.issuedBy.length}}</span><br>\n            <span class=\"book-location\">Location of the Book: {{book.location}} (shelf,row,coloumn)</span><br>\n        </div>\n    </div>\n</ul>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <div class=\"row users-list\" *ngFor=\"let user of users\">\n        <div class=\"col-md-1 col-sm-6 imageBox\">\n            <img class=\"img-responsive img-thumbnail img-circle\" [src]=\"user.imageUrl \" />\n        </div>\n        <div class=\"col-md-1 \"></div>\n        <div class=\"col-md-10 col-sm-6 detailBox \">\n            <span class=\"user-title \">{{user.name}}</span><br>\n        </div>\n    </div>\n</ul>"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<atl-header></atl-header>\n<router-outlet class=\"row\"></router-outlet>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n    <img class=\"img-responsive thumbnailImage\" [src]=\"book.imageUrl\" alt=\"book.imageUrl\">\n    <div class=\"caption\">\n        <span class=\"book-title\">{{book.title}}</span><br>\n        <span class=\"book-author\">{{book.authors}}</span><br>\n        <a class=\"btn btn-default view-button\" role=\"button\" (click)=\"onViewBookClicked(book.isbn)\">View</a>\n    </div>\n</div>"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div class=\"book-list-window\">\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n                <form class=\"navbar-form navbar-left\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Title or Author Name\" #search (keyup)=\"0\">\r\n                </form>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Filter By <span class=\"glyphicon glyphicon-filter\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a>Technology</a></li>\r\n                            <li><a>Bussiness</a></li>\r\n                            <li><a>Fiction</a></li>\r\n                            <li><a>Management</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"row equal thumbnailCard\">\r\n        <atl-book-thumbnail class=\"col-xs-6 col-sm-2 \" *ngFor=\"let book of (allBooks | searchFilter: search.value) \" [book]=\"book\"></atl-book-thumbnail>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book\">\n    <div class=\"col-md-4 bookCoverBox\">\n        <img class=\"bookCover img-responsive center-block\" [src]=\"book.imageUrl\" />\n    </div>\n    <div class=\"col-md-8 bookDetailBox\">\n        <div class=\"book-title\">{{book.title}}</div>\n        <div class=\"book-authors\">{{book.authors}}</div>\n        <div class=\"book-category\">{{book.category}}</div>\n        <div class=\"book-location\">{{book.location}} (s=shelf,r=row,c=column)</div>\n        <p class=\"book-description\">{{book.description}}</p>\n        <button class=\"btn btn-default\" *ngIf=\"book.status=='AVAILABLE'\" role=\"button\" (click)=\"onIssueClick()\">Issue</button>\n        <button class=\"btn btn-default\" *ngIf=\"book.status=='EXPIRED'\" role=\"button\">Renew</button>\n        <button class=\"btn btn-default\" *ngIf=\"(book.status=='EXPIRED' || book.status=='ISSUED')\" role=\"button\">Return</button>\n        <button class=\"btn btn-default\" *ngIf=\"book.status=='NOT_AVAILABLE'\" role=\"button\" [disabled]=\"true\">Not Available</button>\n    </div>\n</div>\n<p *ngIf=\"!book\">\n    No book found with such book id\n</p>"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1 col-sm-6 imageBox\">\n    <img class=\"coverImage\" [src]=\"book.imageUrl\" />\n</div>\n<div class=\"col-md-1\"></div>\n<div class=\"col-md-10 col-sm-6 detailBox\">\n    <span class=\"book-title\">{{book.title}}</span><br>\n    <span class=\"book-author\">{{book.authors}}</span><br><br>\n    <span class=\"book-due\">Return is due on {{book.dueOn |  date:'fullDate'}}</span><br><br><br>\n    <button class=\"btn btn-default\" (click)=\"onReturnClicked(book.isbn)\" [disabled]=\"actionSuccess\"><span *ngIf=\"!actionSuccess\">Return</span><span *ngIf=\"actionSuccess\"> <span class=\"glyphicon glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Returned</span> </button>\n    <button class=\" btn btn-default \" *ngIf=\"book.status=='EXPIRED'\" (click)=\"onRenewClicked(book.isbn)\" [disabled]=\"actionSuccess\"><span *ngIf=\"!actionSuccess\">Renew</span><span *ngIf=\"actionSuccess\"> <span class=\"glyphicon glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Renewed</span></button>\n</div>"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n    <div class=\"row book-list\" *ngFor=\"let book of issuedBooks\">\r\n        <atl-book-list [book]=\"book\"></atl-book-list>\r\n    </div>\r\n</ul>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"readerBody\">\n    <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\">\n            <a routerLink=\"/reader/books\">All Books</a>\n        </li>\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a routerLink=\"/reader/issued-books\">Issued Books</a></li>\n    </ul>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav navbar-nav \">\n    <li *ngIf=\"adminLinkVisible\"> <a routerLink=\"/admin\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span></a></li>\n    <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span><img class=\"profile-image-header\" [(src)] =\"currentUser.imageUrl\"></span>{{currentUser.name}}</a>\n        <ul class=\"dropdown-menu\">\n            <!-- <li><a href=\"#\" [attr.disabled]=\"valid == true ? true : null\">Settings</a></li> -->\n            <!-- <li role=\"separator\" class=\"divider\"></li> -->\n            <li><a (click)=\"logout()\">Logout</a></li>\n        </ul>\n    </li>\n</div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" *ngIf=\"shouldVisible\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Any Time Library</a>\n        </div>\n        <ul class=\"navbar-right\">\n            <atl-header-profile-toolbar></atl-header-profile-toolbar>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row main\">\n        <div class=\"panel-heading\">\n            <div class=\"panel-title text-center\">\n                <h1 class=\"title\">Any Time Library</h1>\n                <hr />\n            </div>\n        </div>\n        <div class=\"main-login main-center\">\n            <div class=\"form-group\">\n                <div class=\"cols-sm-10\">\n                    <button type=\"button\" id=\"login\" class=\"btn btn-default login-button \" aria-label=\"Left Align\" (click)=\"login()\">\n                        <span><i class=\"fa fa-facebook\"></i> Login With Facebook</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(424);


/***/ })

},[795]);
//# sourceMappingURL=main.bundle.map