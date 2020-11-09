<?php

use App\Http\Controllers\Api\LangController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ValidateController;
use Illuminate\Support\Facades\Route;

Route::group([], function ($route) {
    Route::get('validate', [ValidateController::class, 'index']);
    Route::match(['put', 'patch'], 'locale', [LangController::class, 'update']);
});

Route::middleware('auth:sanctum')->group(function ($route) {
    $route->get('/me', [UserController::class, 'me']);
});
