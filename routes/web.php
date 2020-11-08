<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('{any}', 'IndexController')->where('any', '.*');
