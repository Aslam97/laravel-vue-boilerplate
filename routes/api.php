<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function ($route) {
    $route->get('/user', [UserController::class, 'show']);
});
