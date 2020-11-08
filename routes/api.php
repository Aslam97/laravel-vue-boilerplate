<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function ($route) {

    $route->get('login', [LoginController::class, 'login']);
    $route->post('login', [LoginController::class, 'login']);

    $route->get('register', [RegisterController::class, 'register']);
    $route->post('register', [RegisterController::class, 'register']);
});

Route::middleware('auth:sanctum')->group(function ($route) {
    $route->get('/user', [UserController::class, 'show']);
});
