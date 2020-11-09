<?php

use App\Http\Controllers\Api\LangController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::match(['put', 'patch'], 'locale', [LangController::class, 'update']);

Route::middleware('auth:sanctum')->group(function ($route) {
    $route->get('/user', [UserController::class, 'show']);
});
